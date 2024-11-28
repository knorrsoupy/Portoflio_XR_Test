'use strict';

/**
 * Progress bar
 **/
window.onload = function() {
  // Set the progress bar width to 0 on page load
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = "0%";
    progressBar.style.opacity = 0;
  }
};

window.onscroll = function() {
  updateScrollBar();
};

function updateScrollBar() {
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.opacity = 1;
  }
  // Get the height of the document
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // Get the current scroll position
  let scrollTop = document.documentElement.scrollTop;
  
  // Calculate the width percentage
  let scrollPercentage = (scrollTop / scrollHeight) * 100;
  
  // Update the width of the scroll bar
  if (progressBar) {
    progressBar.style.width = scrollPercentage + "%";
  }
}

/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length/2; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);



/**
 * navbar change icon
 */

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.querySelector('.nav-toggle-btn');
  const icon = toggleButton.querySelector('ion-icon');

  toggleButton.addEventListener('click', function() {
    if (icon.getAttribute('name') === 'menu') {
      icon.setAttribute('name', 'close');
    } else {
      icon.setAttribute('name', 'menu');
    }
  });
});


/*
*footer part
*/

document.addEventListener("DOMContentLoaded", function() {
  fetch('footer.html')
    .then(response => response.text())
    .then(data => {
      document.querySelectorAll('.footer').forEach(element => {
        element.innerHTML = data;
      });
    });
});

/*
*changing title
*/
document.addEventListener('DOMContentLoaded', function() {
  new Typed('#job-title', {
      strings: ['DESIGNER','ENGINEER','CREATIVE_TECHNOLOGIST'],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1500,
      startDelay: 100,
      loop: true,
      cursorChar: '_',
      smartbackspace: true,
  });
});