const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongoDB
const dbURI = 'mongodb+srv://user-1:test123@cluster01.6eethjm.mongodb.net/node-tuts';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
})
app.get('/about', (req, res) => {
    // res.send('Hello from the home page');
    res.render('about', { title: 'About'});
});

// blog routes

app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) =>{
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        });
})

app.get('/blogs/create', (req, res) =>{
    res.render('create', { title: 'Create a New Blog'});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
})