// Matrix Rain Background
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.random() * canvas.height;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff00';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}
setInterval(draw, 50);

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Button click animations and actions
function addClickAnimation(button) {
    button.classList.add('animate-click');
    setTimeout(() => button.classList.remove('animate-click'), 500);
}

// Get Started Button
document.getElementById('get-started').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = '#signup'; // Redirect to signup section
});

// Explore Now Button
document.getElementById('explore-now').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = '#cybersecurity'; // Stay in section or could link to external resource
});

// Start Coding Button
document.getElementById('start-coding').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = 'https://github.com/markjptolentino'; // Redirect to GitHub
});

// Build a Site Button
document.getElementById('build-a-site').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = '#web-dev'; // Stay in section or could link to a tool
});

// Hack Ethically Button
document.getElementById('hack-ethically').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = 'https://www.offensive-security.com/'; // Example pentesting resource
});

// Contact Us Button
document.getElementById('contact-us').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = '#contact'; // Redirect to contact section
});

// Send Message Button (Form Submission)
document.getElementById('send-message').addEventListener('click', function (e) {
    e.preventDefault();
    addClickAnimation(this);
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    console.log('Form Data:', data); // Placeholder for actual form submission
    alert('Message sent! (This is a placeholder - check console for form data)');
    form.reset();
});

// Login Button
document.getElementById('login-btn').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = '/login'; // Hypothetical login page
});

// Signup Button
document.getElementById('signup-btn').addEventListener('click', function () {
    addClickAnimation(this);
    window.location.href = '/signup'; // Hypothetical signup page
});

// Search icon click (placeholder)
document.querySelector('.search-icon').addEventListener('click', () => {
    alert('Search functionality coming soon!');
});

// Resize canvas on window resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});