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

//navbar changes bg when scrolled
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
window.addEventListener("scroll", handleScroll);
