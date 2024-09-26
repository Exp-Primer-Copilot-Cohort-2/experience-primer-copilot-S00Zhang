// Create web server
// Create a web server that listens to a particular port.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Set the port
const port = 3000;

// Set the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Comments App'
    });
});

app.post('/add_comment', (req, res) => {
    const comment = req.body.comment;
    console.log(comment);
    res.redirect('/');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
// Open the browser and go to http://localhost:3000 to see the app in action.