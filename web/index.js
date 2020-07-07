// Packages
const express = require('express'),
    path = require('path');

// Init
const app = express();

// Cache control
app.use((req, res, next) => {
    if(/\/static\//g.test(req.url)) {
        res.set('Cache-Control', 'max-age=31536000');
    } else res.set('Cache-Control', 'no-cache');
    next()
});

// Routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);