# Easy Project - Node.js Hello API

## Description
A simple Node.js application using Express that provides a GET endpoint with a name query parameter. This project demonstrates basic API development with parameter validation and JSON responses.

## Features
- Single GET endpoint at root path (`/`)
- Accepts `name` query parameter
- Returns "Hello [name]" response in JSON format
- Input validation with error handling
- Clean, minimalist code structure

## Technical Implementation
- **Framework**: Express.js
- **Port**: 3000
- **Response Format**: JSON
- **Error Handling**: 400 status for missing parameters

## Setup Instructions
1. Navigate to the easy-project directory:
   ```bash
   cd easy-project
   ```
2. Install dependencies:
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

### GET /
**Description**: Greets a user with their provided name

**Query Parameters**:
- `name` (required): The name to include in the greeting

**Success Response**:
```json
{
  "message": "Hello [name]"
}
```

**Error Response** (400 Bad Request):
```json
{
  "error": "Name query parameter is required. Use: /?name=YourName"
}
```

## Usage Examples
- Base URL: http://localhost:3000
- **Example 1**: http://localhost:3000/?name=John
  - Response: `{"message": "Hello John"}`
- **Example 2**: http://localhost:3000/?name=Alice
  - Response: `{"message": "Hello Alice"}`
- **Error Example**: http://localhost:3000/
  - Response: `{"error": "Name query parameter is required. Use: /?name=YourName"}`

## Testing
### Browser Testing
Open your browser and navigate to:
```
http://localhost:3000/?name=YourName
```

### Command Line Testing
```bash
# Successful request
curl "http://localhost:3000/?name=John"

# Error case
curl "http://localhost:3000/"
```

### Testing with Different Tools
- **Postman**: GET request to `http://localhost:3000/?name=TestName`
- **Browser**: Direct URL navigation
- **Any HTTP client**: Simple GET request with query parameter

## Code Structure
```
easy-project/
├── server.js          # Main application file
├── package.json       # Dependencies and scripts
└── README.md         # This file
```

## Learning Outcomes
This project demonstrates:
- Basic Node.js server setup
- Express.js routing
- Query parameter handling
- JSON response formatting
- Input validation
- Error handling best practices