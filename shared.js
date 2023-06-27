var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");
var package = document.querySelector(".package");

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function() {
    // modal.className = 'open'; // This will actually overwrite the complete class list
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
  closeMobileNavbar();
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 200);
}

toggleButton.addEventListener("click", function() {

  backdrop.style.display = 'block';
  setTimeout(function() {
    backdrop.classList.add("open");
    mobileNav.classList.add("open-sidebar");
  }, 10);
});

function closeMobileNavbar() {
  mobileNav.classList.remove("open-sidebar");
}

ctaButton.addEventListener('animationstart', function(event) {
  console.log('Animation Started', event);
})

ctaButton.addEventListener('animationend', function(event) {
  console.log('Animation ended', event);
})

ctaButton.addEventListener('animationiteration', function(event) {
  console.log('Animation iteration', event);
})
