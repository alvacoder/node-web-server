const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express.');
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
});

app.get('/bad', (req, res) => {
    res.send({
        name: "Idris",
        phone: "07085183282",
        errorMessage: "Unable to display data"
    });
});
app.listen(3000);