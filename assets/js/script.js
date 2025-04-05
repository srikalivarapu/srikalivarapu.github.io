'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// // testimonials variables
// const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
// const modalContainer = document.querySelector("[data-modal-container]");
// const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
// const overlay = document.querySelector("[data-overlay]");

// // modal variable
// const modalImg = document.querySelector("[data-modal-img]");
// const modalTitle = document.querySelector("[data-modal-title]");
// const modalText = document.querySelector("[data-modal-text]");

// // modal toggle function
// const testimonialsModalFunc = function () {
//   modalContainer.classList.toggle("active");
//   overlay.classList.toggle("active");
// }

// // add click event to all modal items
// for (let i = 0; i < testimonialsItem.length; i++) {

//   testimonialsItem[i].addEventListener("click", function () {

//     modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
//     modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
//     modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
//     modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

//     testimonialsModalFunc();

//   });

// }

// add click event to modal close button
// modalCloseBtn.addEventListener("click", testimonialsModalFunc);
// overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// // contact form variables
// const form = document.querySelector("[data-form]");
// const formInputs = document.querySelectorAll("[data-form-input]");
// const formBtn = document.querySelector("[data-form-btn]");

// // add event to all form input field
// for (let i = 0; i < formInputs.length; i++) {
//   formInputs[i].addEventListener("input", function () {

//     // check form validation
//     if (form.checkValidity()) {
//       formBtn.removeAttribute("disabled");
//     } else {
//       formBtn.setAttribute("disabled", "");
//     }

//   });
// }



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const email =  form.querySelector('input[name="email"]').value;

// Function to check form validity and enable/disable button
function checkFormValidity() {
  let isValid = true;

  if( /(.+)@(.+){2,}\.(.+){2,}/.test(email) ){
    isValid = true;
  } else {
    isValid = false;
  }
  
  formInputs.forEach(input => {
    if (!input.checkValidity()) {
      isValid = false;
    }
  });
  if (isValid) {
    formBtn.removeAttribute("disabled");
  } else {
    formBtn.setAttribute("disabled", "");
  }
}

// Add event listener to form inputs for input events
formInputs.forEach(input => {
  input.addEventListener("input", checkFormValidity);
});

// // handle form submission
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent default form submission

//   // Extract form data
//   const formData = {
//     fullname: form.querySelector('input[name="fullname"]').value,
//     email: form.querySelector('input[name="email"]').value,
//     message: form.querySelector('textarea[name="message"]').value
//   };

//   // Send email using EmailJS
//   emailjs.send("service_tlc5o4i", "template_v7gu42s", formData)
//     .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//       alert('Your message has been sent successfully!');
//       form.reset(); // Reset form fields
//       formBtn.setAttribute("disabled", ""); // Disable button again
//     }, function(error) {
//       console.log('FAILED...', error);
//       alert('Failed to send your message. Please try again later.');
//     });
// });

// Initial check for form validity
checkFormValidity();

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Get all project items
const projectItems = document.querySelectorAll('[data-project-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const overlay = document.querySelector('[data-overlay]');
const closeModalBtn = document.querySelector('[data-modal-close-btn]');

// Get modal elements to update content
const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalTech = document.querySelector('[data-modal-tech]');
const modalText = document.querySelector('[data-modal-text]');
const modalDescription = modalContainer.querySelector('[data-modal-description]');

projectItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get content from the clicked item
    const imgSrc = item.querySelector('[data-project-img]').src;
    const title = item.querySelector('[data-project-title]').textContent;
    const tech = item.querySelector('[data-project-tech]').textContent;
    const description = item.querySelector('[data-project-description]').innerHTML;
    

    // Update modal content
    modalImg.src = imgSrc;
    modalTitle.textContent = title;
    modalTech.textContent = tech;
    modalDescription.innerHTML = description;

    // Show modal
    modalContainer.classList.add('active');
    overlay.classList.add('active');
  });
});

// Close modal when close button or overlay is clicked
const closeModal = () => {
  modalContainer.classList.remove('active');
  overlay.classList.remove('active');
};
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
