// 1. Event Handling

// Button Click Event
document.getElementById('clickButton').addEventListener('click', function() {
    alert('Button clicked!');
});

// Hover Effect on Button
document.getElementById('hoverButton').addEventListener('mouseover', function() {
    console.log('Hovered over button!');
});

// Keypress Detection
document.getElementById('keypressInput').addEventListener('keypress', function(event) {
    console.log('Key pressed:', event.key);
});

// Bonus: Double Click Action
document.getElementById('clickButton').addEventListener('dblclick', function() {
    alert('Double-clicked!');
});

// 2. Interactive Elements

// Change button color dynamically
document.getElementById('clickButton').addEventListener('click', function() {
    this.style.backgroundColor = 'blue'; // Change to blue on click
});

// Image Gallery (Just a basic feature)
const galleryImages = document.querySelectorAll('#gallery img');
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        alert('You clicked an image!');
    });
});

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-btn');
accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// 3. Form Validation

const form = document.getElementById('myForm');

// Real-time feedback while typing for email
document.getElementById('emailField').addEventListener('input', function() {
    const email = this.value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (emailValid) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

// Password validation (min length 8 characters)
document.getElementById('passwordField').addEventListener('input', function() {
    const password = this.value;
    if (password.length >= 8) {
        this.style.borderColor = 'green';
    } else {
        this.style.borderColor = 'red';
    }
});

// Submit event for required fields check
form.addEventListener('submit', function(event) {
    const requiredField = document.getElementById('requiredField').value;
    const emailField = document.getElementById('emailField').value;
    const passwordField = document.getElementById('passwordField').value;

    if (!requiredField || !emailField || !passwordField) {
        alert('All fields are required!');
        event.preventDefault(); // Prevent form submission
    }
});
