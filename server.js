const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Calculator endpoint
app.get('/calc', (req, res) => {
    // Get numbers from query parameters
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    
    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ 
            error: 'Please provide valid numbers as query parameters num1 and num2' 
        });
    }
    
    // Calculate sum and send response
    const sum = num1 + num2;
    res.json({ result: sum });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on 2 http://localhost:${PORT}`);
}); 