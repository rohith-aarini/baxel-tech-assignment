// This is a Node.js application using Express and Puppeteer to perform Google searches and return results using multiple selector strategies to reduce bot detection.
// The application has two endpoints: one for greeting a user and another for performing a search query
// Note: This scraping is for demonstration purposes only and should comply with Google's terms of service.
//       For production use, consider using official APIs or services that allow scraping.

const express = require('express');
const puppeteer = require('puppeteer');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const PORT = 3002;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

app.get('/greetings', (req, res) => {
    const name = req.query.name;
    
    if (!name) {
        return res.status(400).json({ 
            error: 'Name query parameter is required. Use: /greetings?name=<Any name>' 
        });
    }
    
    res.json({ 
        message: `Hello ${name}` 
    });
});

app.post('/api/search', async (req, res) => {
    const { query } = req.body;
    
    if (!query) {
        return res.status(400).json({ 
            error: 'Search query is required' 
        });
    }
    
    try {
        io.emit('searchStatus', { status: 'Starting search...', query });
        
        const browser = await puppeteer.launch({ 
            headless: false,
            slowMo: 50,
            args: [
                '--no-sandbox', 
                '--disable-setuid-sandbox',
                '--disable-blink-features=AutomationControlled',
                '--disable-web-security',
                '--disable-dev-shm-usage',
                '--no-first-run',
                '--no-default-browser-check'
            ]
        });
        
        io.emit('searchStatus', { status: 'Browser launched, opening new page...', query });
        
        const page = await browser.newPage();
        
        // Enhanced bot detection avoidance
        await page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', {
                get: () => undefined,
            });
        });
        
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36');
        await page.setViewport({ width: 1366, height: 768 });
        
        // Add some randomness to appear more human-like
        await page.evaluateOnNewDocument(() => {
            ['height', 'width'].forEach(property => {
                const imageDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, property);
                Object.defineProperty(HTMLImageElement.prototype, property, {
                    ...imageDescriptor,
                    get: function() {
                        if (this.complete && this.naturalHeight == 0) {
                            return 16;
                        }
                        return imageDescriptor.get.apply(this);
                    },
                });
            });
        });
        
        io.emit('searchStatus', { status: 'Navigating to Google search...', query });
        
        await page.goto(`https://www.google.com/search?q=${encodeURIComponent(query)}&hl=en`, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });
        
        io.emit('searchStatus', { status: 'Waiting for search results to load...', query });
        
        // Wait for search results to load
        try {
            await page.waitForSelector('div[data-ved]', { timeout: 10000 });
        } catch (e) {
            io.emit('searchStatus', { status: 'Primary selector not found, trying fallback...', query });
        }
        
        io.emit('searchStatus', { status: 'Extracting search results...', query });
        
        const results = await page.evaluate(() => {
            // Multiple selector strategies for robustness
            const selectors = [
                'div[data-ved] h3',
                'h3[class]',
                '[role="heading"][aria-level="3"]',
                'div > div > div > div > div > div > div > div h3'
            ];
            
            let resultElements = [];
            
            // Try each selector until we find results
            for (const selector of selectors) {
                resultElements = document.querySelectorAll(selector);
                if (resultElements.length > 0) {
                    console.log(`Found ${resultElements.length} results with selector: ${selector}`);
                    break;
                }
            }
            
            return Array.from(resultElements)
                .slice(0, 10)
                .map(element => {
                    const linkElement = element.closest('a');
                    const title = element.textContent.trim();
                    
                    return {
                        element,
                        linkElement,
                        title,
                        url: linkElement?.href
                    };
                })
                .filter(item => 
                    item.linkElement && 
                    item.url && 
                    !item.url.includes('google.com') &&
                    item.title.length > 0
                )
                .map(item => ({
                    title: item.title,
                    url: item.url
                }));
        });
        
        io.emit('searchStatus', { status: 'Search completed!', query });
        
        setTimeout(async () => {
            await browser.close();
            io.emit('searchStatus', { status: 'Browser closed', query });
        }, 2000);
        
        res.json({
            query: query,
            results: results,
            count: results.length
        });
        
    } catch (error) {
        console.error('Search error:', error);
        io.emit('searchStatus', { status: `Error: ${error.message}`, query });
        res.status(500).json({ 
            error: 'Failed to perform search',
            details: error.message 
        });
    }
});

io.on('connection', (socket) => {
    console.log('Client connected');
    
    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Hard project server running on http://localhost:${PORT}`);
});