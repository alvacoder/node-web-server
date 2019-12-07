const express = require('express');
const hbs = require('hbs');
const app = express();
const fs = require('fs');
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (error) => {
        if(error) {
            console.log('Unable to save server logs');
        }
    });
    console.log(log);
    next();
});

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.use(express.static(__dirname + '/public')); 

app.use('/maintenance', (req, res, next) => {
    res.render('maintenance.hbs');
    next();
});
// other pages won't be rendered if next function isn't not called.
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

app.use('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle: 'Projects Page',
        welcomeMessage: 'Welcome to my portfolio'
    });
})

app.get('/bad', (req, res) => {
    res.send({
        name: "Idris",
        phone: "07085183282",
        errorMessage: "Unable to display data"
    });
});

app.listen(port);
console.log(`App is running on ${port}`);