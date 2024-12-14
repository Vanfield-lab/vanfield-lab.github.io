// Function to load reusable components
function loadComponent(componentPath, targetElement) {
    fetch(componentPath)
      .then((response) => response.text())
      .then((data) => {
        document.querySelector(targetElement).innerHTML = data;
      })
      .catch((error) => console.error("Error loading component:", error));
  }
  
  // Load Navbar
  loadComponent("nav.html", "header");
  
  // Load Footer
 loadComponent("footer.html", "footer");
  
  // Load Modal
  loadComponent("modal.html", "#modal-container");