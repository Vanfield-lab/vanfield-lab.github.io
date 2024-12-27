document.addEventListener("click", (e) => {
  const modal = document.querySelector("#reservationModal");
  const closeModalBtn = document.querySelector("#closeModalBtn");

  // Open Modal
  if (e.target.id === "openModalBtn") {
      modal.style.display = "block";
  }
  
  // Close Modal (click on close button or modal background)
  if (e.target === modal || e.target.closest("#closeModalBtn")) {
      modal.style.display = "none";
  }
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () =>{
        nav.classList.toggle('nav--visible');
})

function toggleMenu() {
        const navLinks = document.querySelector('.nav');
        const hamburger = document.querySelector('.hamburger');
      
        navLinks.classList.toggle('nav--visible');
        hamburger.classList.toggle('close');
}
function closeMenu() {
        const navVisible = document.querySelector('.nav--visible');
        const navLinks = document.querySelector('.page-link');
        const hamburger = document.querySelector('.hamburger');
      
        navLinks.classList.remove('show');
        hamburger.classList.remove('close');
        navVisible.classList.remove('nav--visible');
}

/*navbar changes bg when scrolled
// Select the navbar
const header = document.getElementById("header");

// Function to handle the scroll behavior
function handleScroll() {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}


// Run scroll check on page load
window.addEventListener("load", handleScroll);

// Listen to scroll events
window.addEventListener("scroll", handleScroll);*/
