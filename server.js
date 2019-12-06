const express = require('express');
const hbs = require('hbs');
const app = express();
const fs = require('fs');

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n');
    console.log(`${now}: ${req.method} ${req.url}`);
    next();
})

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use(express.static(__dirname + '/public')); 

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Homepage',
        welcomeMessage: 'Welcome to ATB Techsoft'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    res.send({
        name: "Idris",
        phone: "07085183282",
        errorMessage: "Unable to display data"
    });
});

app.listen(3000);