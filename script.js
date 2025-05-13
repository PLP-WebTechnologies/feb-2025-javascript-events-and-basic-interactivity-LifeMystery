// Event Handling: Button click, hover, and other events
const button = document.getElementById("clickButton");

// Button click event
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover effect
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "lightblue";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "";
});

// Keypress detection
document.addEventListener("keypress", (event) => {
  console.log(`Key pressed: ${event.key}`);
});

// Double-click event
button.addEventListener("dblclick", () => {
  alert("You double-clicked the button!");
});

// Long press detection
let pressTimer;
button.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    alert("Long press detected!");
  }, 1000); // 1 second long press
});
button.addEventListener("mouseup", () => {
  clearTimeout(pressTimer);
});

// Image gallery interaction
const images = document.querySelectorAll("#imageGallery img");
images.forEach((image) => {
  image.addEventListener("click", () => {
    alert(`You clicked on ${image.alt}`);
  });
});

// Tabs functionality
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => content.classList.remove("active"));
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Form Validation
const form = document.getElementById("userForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if fields are empty
  if (!username || !email || !password) {
    feedback.textContent = "Please fill in all fields!";
    return;
  }

  // Email validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address!";
    return;
  }

  // Password validation (min 8 characters)
  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
    return;
  }

  feedback.textContent = "Form submitted successfully!";
});

// Real-time feedback while typing (for email and password fields)
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

emailField.addEventListener("input", () => {
  if (!emailPattern.test(emailField.value)) {
    feedback.textContent = "Email is invalid!";
  } else {
    feedback.textContent = "";
  }
});

passwordField.addEventListener("input", () => {
  if (passwordField.value.length < 8) {
    feedback.textContent = "Password is too short!";
  } else {
    feedback.textContent = "";
  }
});
