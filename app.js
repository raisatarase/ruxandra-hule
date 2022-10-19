const express = require('express');
const morgan = require('morgan');

// express app
const app = express();
app.use(express.static("public"));

// register view engine

app.set('view engine', 'ejs');

// listen for request
app.listen(3000);

// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));


app.get('/', (req, res) => {
  res.render('gallery', { title: 'Gallery'});
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About'});
});

app.get('/gallery', (req, res) => {
  res.render('gallery', { title: 'Gallery'});
});

app.get('/contact', (req, res) => {
  // res.sendFile('./views/contact.html', { root: __dirname });
  res.render('contact', { title: 'Contact'});
});

// redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 page goes to the bottom
app.use((req, res) => {
  res.status(404).render('404', { title: '404'})
});
