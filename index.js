
    const openModalBtn = document.getElementById("openModalBtn");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const modal = document.getElementById("reservationModal");

    // Open Modal
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    // Close Modal
    closeModalBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    // Close Modal if clicking outside the modal-content
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });