// Highlight the current page in the nav bar
const currentPage = location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav a");
for (const link of navLinks) {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
    break;
  }
}

// Toggle the visibility of the principal info section when clicking the image
const principalImage = document.querySelector("#principal-info img");
const principalInfo = document.querySelector("#principal-info p");
let isPrincipalInfoVisible = false;
principalImage.addEventListener("click", () => {
  isPrincipalInfoVisible = !isPrincipalInfoVisible;
  if (isPrincipalInfoVisible) {
    principalInfo.style.display = "block";
  } else {
    principalInfo.style.display = "none";
  }
});

// Add a smooth scrolling effect when clicking on internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
for (const link of internalLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetElement = document.querySelector(link.getAttribute("href"));
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}