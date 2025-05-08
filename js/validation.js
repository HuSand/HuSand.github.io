document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("inquiryForm");
    const submitButton = document.getElementById("submitBtn");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = form.querySelector('input[type="text"]');
      const email = form.querySelector('input[type="email"]');
      const contents = form.querySelector('textarea');
      const checkbox = form.querySelector('input[type="checkbox"]');
  
      const errorMessages = form.querySelectorAll(".error-message");
  
      errorMessages.forEach(msg => {
        msg.textContent = "";
      });
  
      let isValid = true;
  
      if (name.value.trim() === "") {
        name.closest(".gray-box").querySelector(".error-message").textContent =
          "Please enter the required fields correctly";
        isValid = false;
      }
  
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value.trim())) {
        email.closest(".gray-box").querySelector(".error-message").textContent =
          "Please enter the required fields correctly";
        isValid = false;
      }

      if (contents.value.trim() === "") {
        contents.closest(".gray-box").querySelector(".error-message").textContent =
          "Please enter the required fields correctly";
        isValid = false;
      }
  
      if (!checkbox.checked) {
        alert("Please confirm that the information is correct by checking the box.");
        isValid = false;
      }
  
      if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
      } else {
        submitButton.disabled = false;
      }
    });
  
    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach(input => {
      input.addEventListener("input", function () {
        const errorMsg = input.closest(".gray-box").querySelector(".error-message");
        if (errorMsg) {
          errorMsg.textContent = "";
        }
      });
    });
  });
  