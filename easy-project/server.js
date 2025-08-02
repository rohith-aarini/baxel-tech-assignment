// Easy Project Server
// This server responds to a simple GET request with a greeting message.
// Usage: Start the server using `npm start` and access it via http://localhost:3000/?name=<Any name> in the web or in postman.


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    const name = req.query.name;
    
    if (!name) {
        return res.status(400).json({ 
            error: 'Name query parameter is required. Use: /?name=YourName' 
        });
    }
    res.json({ 
        message: `Hello ${name}` // Using literals to print text and variables in a single string
    });
});


app.listen(PORT, () => {
    console.log(`Easy project server running on http://localhost:${PORT}`);
    console.log(`Try: http://localhost:${PORT}/?name=<Any name>`);
});