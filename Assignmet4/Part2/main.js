// Part 2 - Image Gallery JavaScript

var displayedImg = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

// Array of image filenames and alt text
var images = [
  { filename: 'pic1.jpg', alt: 'Closeup of a human eye' },
  { filename: 'pic2.jpg', alt: 'Rock that looks like a wave' },
  { filename: 'pic3.jpg', alt: 'Purple and white pansies' },
  { filename: 'pic4.jpg', alt: 'Section of wall from a pharaoh\'s tomb' },
  { filename: 'pic5.jpg', alt: 'Large moth on a leaf' }
];

// Base URL for the images on MDN
var baseURL = 'https://mdn.github.io/shared-assets/images/examples/learn/gallery/';

// Loop through the images and create thumbnail images
for (var i = 0; i < images.length; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', baseURL + images[i].filename);
  newImage.setAttribute('alt', images[i].alt);
  thumbBar.appendChild(newImage);

  // Add click event to each thumbnail
  newImage.addEventListener('click', function(e) {
    displayedImg.src = e.target.src;
    displayedImg.alt = e.target.alt;
  });
}

// Darken/Lighten button handler
btn.addEventListener('click', function() {
  var btnClass = btn.getAttribute('class');

  if (btnClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});