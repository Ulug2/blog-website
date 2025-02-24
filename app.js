// Import the express module
const express = require('express');

// Import the morgan module for HTTP request logging
const morgan = require('morgan');


// Import the mongoose module for MongoDB interaction
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes');

// Create an express application
const app = express();

// MongoDB connection URI
require('dotenv').config();

const dbURI = process.env.DB_URI;
const port = process.env.PORT || 3000;

mongoose.connect(dbURI)
    .then((result) => app.listen(port, () => console.log(`Server is running on port ${port}`))) // Start the server after successful connection
    .catch((err) => console.log(err));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Middleware & static files
app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies
app.use(morgan('dev')); // HTTP request logger

// Middleware to set the path variable
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});
  
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes 
app.use('/blogs', blogRoutes);


/**
 * Middleware to handle 404 errors.
 * 
 * @param {object} req - The request object.
 * @param {object} res - The response object.
 * @returns {void}
 * 
 */
app.use((req, res) => {
    res.status(404).render('404' , {title: '404'}) // Render the 404 view for undefined routes
});


