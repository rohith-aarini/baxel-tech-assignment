BAXEL TECH INTERNSHIP ASSIGNMENT - COMPLETE SETUP GUIDE
================================================================

This repository contains three progressive Node.js projects demonstrating escalating complexity:

1. EASY PROJECT - Foundational Node.js API with parameter validation
2. MEDIUM PROJECT - Advanced Puppeteer Google search with bot detection avoidance  
3. HARD PROJECT - Full-stack Google search clone with seamless user flow and real-time automation

GETTING STARTED
===============
Clone the repository:
```bash
git clone https://github.com/rohithpadmanabhuni/baxel-tech-assignment.git
cd baxel-tech-assignment
```

SYSTEM REQUIREMENTS
==================
- Node.js (version 14 or higher) - [Download and install from nodejs.org](https://nodejs.org/en/download/)
- npm (comes with Node.js)
- Chrome/Chromium browser (for Puppeteer)
- Internet connection (for Google searches)

### Installing Node.js
1. Visit [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
2. Download the LTS version for your operating system
3. Run the installer and follow the setup wizard
4. Verify installation by opening a terminal and running:
   ```bash
   node --version
   npm --version
   ```

QUICK START - ALL PROJECTS
==========================
1. Open Command Prompt or Terminal
2. Navigate to the main project directory:
   cd baxel-tech-assignment

EASY PROJECT SETUP (Port 3000)
==============================
1. Navigate to easy-project:
   cd easy-project

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. Test the application:
   - Open browser: http://localhost:3000/?name=YourName
   - Root endpoint with name parameter: http://localhost:3000/?name=John
   - Example: http://localhost:3000/?name=Alice

Expected Response: {"message": "Hello Alice"}

Key Features:
- Simple GET endpoint at root path (/)
- Query parameter validation with error handling
- Clean JSON responses
- Template literal string formatting

MEDIUM PROJECT SETUP (Port 3001)
================================
1. Navigate to medium-project:
   cd ../medium-project

2. Install dependencies (this will download Puppeteer):
   npm install

3. Start the server:
   npm start

4. Test the application:
   - Hello endpoint: http://localhost:3001/?name=John
   - Search endpoint: http://localhost:3001/search?q=nodejs
   - Or use curl: curl "http://localhost:3001/search?q=javascript"

Expected Response: JSON with top 10 search results array

Advanced Features:
- Enhanced bot detection avoidance with stealth techniques
- Multiple CSS selector strategies for robust result extraction
- Modern JavaScript functional programming with array methods
- Advanced user agent spoofing and navigator manipulation
- Smart timeout handling and fallback mechanisms
- Optimized result processing with filtering and validation

HARD PROJECT SETUP (Port 3002)
==============================
1. Navigate to hard-project:
   cd ../hard-project

2. Install dependencies:
   npm install

3. Start the server:
   npm start

4. Test the complete user flow:
   - Open browser: http://localhost:3002
   - Enter search query on authentic Google homepage
   - Watch real-time Puppeteer automation with activity logs
   - Automatically redirected to professional Google-style results page
   - Use header search bar for additional searches

Complete User Experience:
- Minimal Google homepage appearance
- Seamless flow: Search → Live Automation → Results
- Real-time WebSocket communication showing Puppeteer progress
- Visual browser automation (non-headless) you can watch
- Search results page with Google-style minimal layout
- Session management for smooth page transitions
- Responsive design for mobile and desktop

RUNNING ALL PROJECTS SIMULTANEOUSLY
===================================
To run all three projects at once, open three separate terminal windows:

Terminal 1 (Easy - Port 3000):
cd easy-project && npm start

Terminal 2 (Medium - Port 3001):
cd medium-project && npm start

Terminal 3 (Hard - Port 3002):
cd hard-project && npm start

TESTING CHECKLIST
=================
✅ Easy Project:
   - GET http://localhost:3000/?name=TestName
   - Should return: {"message": "Hello TestName"}
   - Test error handling: http://localhost:3000/ (no name parameter)

✅ Medium Project:
   - GET http://localhost:3001/?name=TestName  
   - GET http://localhost:3001/search?q=nodejs
   - Should return JSON with top 10 search results
   - Verify advanced bot detection avoidance works
   - Test multiple selector fallback strategies

✅ Hard Project:
   - Open http://localhost:3002 in browser
   - Verify authentic Google homepage appearance
   - Enter search term and submit (e.g., "machine learning")
   - Watch seamless transition to activity view
   - Observe real-time Puppeteer automation in visible browser
   - Monitor WebSocket activity logs with timestamps
   - Verify automatic redirect to results page
   - Test new searches from results page header
   - Check responsive design on different screen sizes

DEBUGGING TIPS
==============
Common Issues:

1. Port Already in Use:
   - Change PORT in server.js files
   - Or kill existing processes: taskkill /f /im node.exe (Windows)

2. Puppeteer Installation Issues:
   - Run: npm install puppeteer --force
   - Ensure Chrome is installed on your system

3. Network Issues:
   - Check internet connection for Google searches
   - Some networks block automated browser requests

4. Permission Issues:
   - Run terminal as administrator if needed
   - Check antivirus software blocking browser automation


TECHNICAL IMPLEMENTATION DETAILS
================================

Easy Project:
- Express.js server
- Single GET endpoint with query parameter validation
- JSON responses with error handling

Medium Project:  
- Extends easy project functionality
- Adds Puppeteer for web scraping
- Headless browser automation
- Google search result extraction (top 10)
- Error handling for network issues

Hard Project:
- Full-stack web application
- Real-time WebSocket communication (Socket.IO)
- Non-headless Puppeteer for visual demonstration
- Google-inspired responsive UI
- Activity logging and status updates
- Static file serving

KEY LEARNING OUTCOMES
=====================
- Node.js and Express.js fundamentals
- REST API development and testing
- Web scraping with Puppeteer
- Real-time communication with WebSockets
- Full-stack JavaScript development
- Error handling and user experience
- Modern web UI/UX design principles
