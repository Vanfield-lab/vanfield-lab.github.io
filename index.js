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
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // Add 'scrolled' class when page is scrolled down 50px
    header.classList.add("scrolled");
  } else {
    // Remove 'scrolled' class when back to the top
    header.classList.remove("scrolled");
  }
});