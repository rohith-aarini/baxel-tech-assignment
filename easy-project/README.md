# Easy Project - Node.js Hello API

## Description
A simple Node.js application using Express that provides a GET endpoint with a name query parameter.

## Features
- GET method at `/hello` endpoint
- Accepts `name` query parameter
- Returns "Hello [name]" response
- Error handling for missing name parameter

## Setup Instructions
1. Navigate to the easy-project directory
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. For development with auto-restart: `npm run dev`

## Usage
- Base URL: http://localhost:3000
- Hello endpoint: http://localhost:3000/hello?name=YourName
- Example: http://localhost:3000/hello?name=John returns {"message": "Hello John"}

## Testing
Open your browser or use curl:
```bash
curl "http://localhost:3000/hello?name=John"
```