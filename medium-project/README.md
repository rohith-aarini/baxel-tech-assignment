# Medium Project - Node.js with Advanced Puppeteer Google Search

## Description
A sophisticated Node.js application that combines basic API functionality with advanced Puppeteer-powered Google search capabilities. Features enhanced bot detection avoidance, multiple selector strategies, and optimized result processing using modern JavaScript techniques.

## Features
- **Dual Functionality**: Hello API + Advanced Google Search
- **Enhanced Bot Detection Avoidance**: Multiple stealth techniques
- **Robust Search Engine**: Multiple fallback selectors for reliability
- **Modern JavaScript**: Functional programming with array methods
- **Headless Browser Automation**: Chrome/Chromium integration
- **Advanced Error Handling**: Comprehensive error management
- **Optimized Performance**: Smart timeouts and efficient processing

## Technical Implementation
- **Framework**: Express.js
- **Port**: 3001
- **Browser Automation**: Puppeteer with stealth mode
- **Search Strategy**: Multiple CSS selector fallbacks
- **Result Processing**: Functional programming approach
- **Bot Avoidance**: Navigator manipulation, user agent spoofing

## Setup Instructions
1. Navigate to the medium-project directory:
   ```bash
   cd medium-project
   ```
2. Install dependencies (includes Puppeteer browser download):
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. For development with auto-restart:
   ```bash
   npm run dev
   ```

## API Documentation

### GET / (Hello Endpoint)
**Description**: Simple greeting functionality

**Query Parameters**:
- `name` (required): Name to include in greeting

**Success Response**:
```json
{
  "message": "Hello [name]"
}
```

**Error Response** (400):
```json
{
  "error": "Name query parameter is required. Use: /?name=<Any name>"
}
```

### GET /search (Advanced Google Search)
**Description**: Performs Google search using Puppeteer with advanced bot detection avoidance

**Query Parameters**:
- `q` (required): Search query term

**Success Response**:
```json
{
  "query": "nodejs",
  "results": [
    {
      "title": "Node.js Official Website",
      "url": "https://nodejs.org"
    }
  ],
  "count": 10
}
```

**Error Response** (500):
```json
{
  "error": "Failed to perform search",
  "details": "Error message details"
}
```

## Advanced Features

### Bot Detection Avoidance
- **Navigator.webdriver removal**: Prevents automation detection
- **Custom User-Agent**: Latest Chrome browser simulation
- **Browser flags**: Comprehensive stealth configuration
- **Viewport simulation**: Realistic screen dimensions
- **Image descriptor manipulation**: Human-like behavior patterns

### Search Robustness
- **Multiple selector strategies**:
  1. `div[data-ved] h3` - Google's data attributes
  2. `h3[class]` - Class-based selection
  3. `[role="heading"][aria-level="3"]` - Accessibility selectors
  4. Nested div fallback structure
- **Smart waiting**: Network idle detection
- **Timeout handling**: 30-second search timeout
- **Result filtering**: Excludes Google internal links

### Modern JavaScript Implementation
```javascript
// Functional programming approach
return Array.from(resultElements)
  .slice(0, 10)
  .map(element => ({ /* extract data */ }))
  .filter(item => /* validate data */)
  .map(item => ({ title: item.title, url: item.url }));
```

## Usage Examples

### Hello API
```bash
# Browser
http://localhost:3001/?name=John

# cURL
curl "http://localhost:3001/?name=John"
```

### Search API
```bash
# Browser
http://localhost:3001/search?q=machine+learning

# cURL
curl "http://localhost:3001/search?q=javascript"

# Complex queries
curl "http://localhost:3001/search?q=node.js+best+practices"
```

## Testing
### Comprehensive Testing
```bash
# Test hello endpoint
curl "http://localhost:3001/?name=Alice"

# Test search functionality
curl "http://localhost:3001/search?q=puppeteer"

# Test error handling
curl "http://localhost:3001/search"  # Missing query parameter
```

### Performance Testing
- **Search time**: Typically 3-8 seconds depending on network
- **Success rate**: High reliability with fallback selectors
- **Result quality**: Top 10 relevant search results

## Code Structure
```
medium-project/
├── server.js          # Main application with advanced search logic
├── package.json       # Dependencies including Puppeteer
└── README.md         # This documentation
```

## Dependencies
- **express**: Web framework
- **puppeteer**: Browser automation
- **nodemon**: Development auto-restart

## Important Notes
1. **Legal Compliance**: This scraping is for demonstration purposes only
2. **Google's ToS**: Ensure compliance with Google's terms of service
3. **Rate Limiting**: Avoid excessive requests to prevent blocking
4. **Network Requirements**: Stable internet connection required
5. **Browser Requirements**: Chrome/Chromium automatically downloaded by Puppeteer

## Troubleshooting
- **Puppeteer installation issues**: Run `npm install puppeteer --force`
- **Search failures**: Check internet connection and Google accessibility
- **Timeout errors**: Increase timeout values for slower networks
- **Empty results**: Normal behavior if Google changes DOM structure

## Learning Outcomes
This project demonstrates:
- Advanced Puppeteer browser automation
- Bot detection avoidance techniques
- Modern JavaScript functional programming
- Robust error handling strategies
- Web scraping best practices
- API design patterns