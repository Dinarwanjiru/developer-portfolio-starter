// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function () {
  // Select the Twitter icon element
  const twitterIcon = document.querySelector(".soicon.tw");

  // Define the URL of your Twitter page
  const twitterPageURL = "https://twitter.com/TechDinar"; // Replace 'your_twitter_handle' with your actual Twitter handle

  // Add an event listener to the Twitter icon
  twitterIcon.addEventListener("click", function (event) {
    // Prevent the default behavior of the link (since we're handling it with JavaScript)
    event.preventDefault();

    // Redirect the user to the Twitter page
    window.location.href = twitterPageURL;
  });
});
document.addEventListener("DOMContentLoaded", function () {
  //select instagram icon element
  const instagramIcon = document.querySelector(".soicon.ig");
  const instagramUrl = "https://www.instagram.com/tech_with_dee/";
  //add eventlistner to the icon
  instagramIcon.addEventListener("click", function (event) {
    event.preventDefault();

    window.location.href = instagramUrl;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const linkedinIcon = document.querySelector(".soicon.linked");
  const linkedinUrl = "https://www.linkedin.com/in/dinah-wanjiru/";
  //add event kistener to icon
  linkedinIcon.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = linkedinUrl;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const githubIcon = document.querySelector(".soicon.git");
  const githubUrl = "https://github.com/Dinarwanjiru";

  //add listener to  icon
  githubIcon.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = githubUrl;
  });
});
