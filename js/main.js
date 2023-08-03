function isElementVisible(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

// Function to handle scroll event
function handleScroll() {
  var boxElement = document.querySelector(".about_box .box");
  if (isElementVisible(boxElement)) {
    boxElement.classList.add("show");
    // Remove the scroll event listener once the box is visible
    window.removeEventListener("scroll", handleScroll);
  }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);
