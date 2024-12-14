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