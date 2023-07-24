function clickSeeMoreLinks() {
  // Find all elements with the "See more" text
  const seeMoreLinks = document.querySelectorAll("a:contains('See more')");

  // Simulate a click event on each "See more" link
  seeMoreLinks.forEach((link) => link.click());
}

// Execute the clickSeeMoreLinks function when the DOM is ready
document.addEventListener("DOMContentLoaded", clickSeeMoreLinks);
