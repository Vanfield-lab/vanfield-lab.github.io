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

// navToggle.addEventListener('click', () =>{
//         nav.classList.toggle('nav--visible');
// })

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
document.addEventListener("DOMContentLoaded", () => {
  const reviewContainer = document.querySelector(".review-container");
  const reviews = document.querySelectorAll(".review-card");
  const dots = document.querySelectorAll(".dot");

  // Function to update the active review and dot
  const updateActiveReview = () => {
    let containerCenter = reviewContainer.offsetWidth / 2 + reviewContainer.scrollLeft;

    reviews.forEach((review, index) => {
      const reviewCenter = review.offsetLeft + review.offsetWidth / 2;

      // Check if the review is closest to the center
      if (Math.abs(containerCenter - reviewCenter) < review.offsetWidth / 2) {
        reviews.forEach((r) => r.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        review.classList.add("active");
        dots[index].classList.add("active");
      }
    });
  };

  // Attach scroll event to update the active review
   reviewContainer.addEventListener("scroll", updateActiveReview);

  // Add click event to dots for navigation
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      reviewContainer.scrollTo({
        left: reviews[index].offsetLeft,
        behavior: "smooth",
      });
    });
  });

  // Initial call to set the active review
  updateActiveReview();
});



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


const galleryItems = document.querySelectorAll(".gallery-image");
const imageOverlay = document.getElementById("imageOverlay");
const overlayImage = document.getElementById("overlayImage");
const closeOverlay = document.getElementById("closeOverlay");
const prevImage = document.getElementById("prevImage");
const nextImage = document.getElementById("nextImage");

let currentIndex = 0;

function showOverlay(index) {
  currentIndex = index;
  overlayImage.src = galleryItems[currentIndex].src;
  imageOverlay.style.display = "flex";
}

function hideOverlay() {
  imageOverlay.style.display = "none";
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  overlayImage.src = galleryItems[currentIndex].src;
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  overlayImage.src = galleryItems[currentIndex].src;
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => showOverlay(index));
});

closeOverlay.addEventListener("click", hideOverlay);
nextImage.addEventListener("click", showNextImage);
prevImage.addEventListener("click", showPrevImage);

imageOverlay.addEventListener("click", (e) => {
  if (e.target === imageOverlay) {
    hideOverlay();
  }
});
console.log(galleryItems);



