// Feedback Form

const emojis = document.querySelectorAll(".emoji");
emojis.forEach((emoji, index) => {
  emoji.addEventListener("click", () => {
    // Remove all colors from all emojis
    emojis.forEach((e) =>
      e.classList.remove("red", "orange", "yellow", "light-green", "dark-green")
    );

    // Add color to the clicked emoji
    switch (index) {
      case 0:
        emoji.classList.add("red");
        break;
      case 1:
        emoji.classList.add("orange");
        break;
      case 2:
        emoji.classList.add("yellow");
        break;
      case 3:
        emoji.classList.add("light-green");
        break;
      case 4:
        emoji.classList.add("dark-green");
        break;
    }
  });
});

let btn = document.querySelector(".btn1");
let textarea = document.querySelector(".t1");
let emoji = document.querySelector(".emoji");

btn.addEventListener("click", () => {
  if (textarea.value.trim() !== "") {
    btn.textContent = "Submitted";
    textarea.value = "";
    textarea.disabled = true; // to make textarea read-only
  } else {
    btn.textContent = "Submit";
  }
  emojis.forEach((e) =>
    e.classList.remove("red", "orange", "yellow", "light-green", "dark-green")
  );
});

// Navbar Hide After Clicking On Menu

// Get all navbar links
const navbarLinks = document.querySelectorAll(".menu");

// Add event listener to each link
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the navbar
    document.querySelector(".navbar-collapse").classList.remove("show");
  });
});

// Navbar Color On Scroll

let navbar = document.querySelector(".navbar");

// Add event listener for touchmove event
document.addEventListener("touchmove", (e) => {
  if (e.touches[0].clientY < e.touches[0].screenY) { // scrolling up
    navbar.style.background = "transparent";
  } else { // scrolling down
    navbar.style.background = "radial-gradient(circle, rgba(255,195,15,1) 14%, rgba(255,126,14,1) 100%)";
  }
});

// Add event listener for scroll event
window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.style.background = "radial-gradient(circle, rgba(255,195,15,1) 14%, rgba(255,126,14,1) 100%)";
  } else {
    navbar.style.background = "transparent";
  }
});
