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

// Hamburger Menu function
 function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Image grow function /////////////////////////////
img = document.getElementsByTagName("img");

function enlargeImg() {
  img.style.width = "60%";
  img.style.height = "auto";
  img.style.transition = "width 0.5s ease";
}


// select all the elements you want to be manipulated

//add events to the elements

//create functions for the events



/* <script>
let x = document.getElementById("myForm");
x.addEventListener("focus", myFocusFunction, true);
x.addEventListener("blur", myBlurFunction, true);

function myFocusFunction() {
  document.getElementById("myInput").style.backgroundColor = "yellow";
}

function myBlurFunction() {
  document.getElementById("myInput").style.backgroundColor = "";
} */
