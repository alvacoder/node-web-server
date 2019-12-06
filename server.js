const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello Express.');
});

app.use(express.static(__dirname + '/public')); 

app.get('/about', (req, res) => {
    res.render('about.hbs');
});

app.get('/bad', (req, res) => {
    res.send({
        name: "Idris",
        phone: "07085183282",
        errorMessage: "Unable to display data"
    });
});
app.listen(3000);