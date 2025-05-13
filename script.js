// Event Handling
document.getElementById('click-btn').addEventListener('click', function() {
  alert('Button clicked!');
});

document.getElementById('hover-btn').addEventListener('mouseover', function() {
  alert('You hovered over the button!');
});

// Keypress detection
document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    alert('You pressed the Enter key!');
  }
});

// Bonus: Double-click or long press
document.getElementById('click-btn').addEventListener('dblclick', function() {
  alert('You double-clicked the button!');
});

let pressTimer;
document.getElementById('click-btn').addEventListener('mousedown', function() {
  pressTimer = setTimeout(function() {
    alert('Long press detected!');
  }, 1000);
});

document.getElementById('click-btn').addEventListener('mouseup', function() {
  clearTimeout(pressTimer);
});

// Interactive Elements
document.getElementById('color-btn').addEventListener('click', function() {
  this.style.backgroundColor = this.style.backgroundColor === 'green' ? 'red' : 'green';
});

let images = document.querySelectorAll('#image-gallery img');
let currentIndex = 0;

setInterval(function() {
  images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].style.display = 'block';
}, 2000);

// Form Validation
document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  // Email format validation
  let emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  // Password rules
  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  alert('Form submitted successfully!');
});

// Real-time feedback while typing
document.getElementById('email').addEventListener('input', function() {
  let feedback = document.getElementById('email-feedback');
  if (!emailPattern.test(this.value)) {
    feedback.textContent = 'Invalid email format';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = 'Valid email format';
    feedback.style.color = 'green';
  }
});
