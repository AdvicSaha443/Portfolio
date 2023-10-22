const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.redirect(path.join(__dirname, 'index.html'));
});

app.get('/home', (req, res) => {
    res.send("This is the home page!");
});

app.listen(port, () => {
    console.log(`The app is running at http://localhost:${port}`);
});

// Be not as you are, but as you should be