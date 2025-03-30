// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.remove(), 500);
});

// Matrix Rain Background
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(0).map(() => Math.random() * canvas.height);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = `${fontSize}px 'Roboto Mono', monospace`;

    drops.forEach((drop, i) => {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillStyle = `rgba(0, 230, 118, ${Math.random() * 0.6 + 0.4})`;
        ctx.fillText(text, i * fontSize, drop * fontSize);
        if (drop * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += Math.random() * 1.2;
    });
    requestAnimationFrame(drawMatrix);
}
requestAnimationFrame(drawMatrix);

// Particle Effects
const particles = document.getElementById('particles');
const particleArray = [];
const particleCount = 50;

class Particle {
    constructor() {
        this.x = Math.random() * window.innerWidth;
        this.y = Math.random() * window.innerHeight;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.life = Math.random() * 100 + 50;
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        if (this.x > window.innerWidth || this.x < 0) this.speedX *= -1;
        if (this.y > window.innerHeight || this.y < 0) this.speedY *= -1;
    }
    draw() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.left = `${this.x}px`;
        particle.style.top = `${this.y}px`;
        particle.style.width = `${this.size}px`;
        particle.style.height = `${this.size}px`;
        particle.style.background = `rgba(0, 188, 212, ${this.life / 150})`;
        particle.style.borderRadius = '50%';
        particle.style.boxShadow = `0 0 8px rgba(0, 188, 212, ${this.life / 150})`;
        particles.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

for (let i = 0; i < particleCount; i++) particleArray.push(new Particle());

function animateParticles() {
    particles.innerHTML = '';
    particleArray.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) particleArray[i] = new Particle();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// Smooth Scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll(anchor.getAttribute('href'));
    });
});

// Button Click Animation
function addClickAnimation(button) {
    button.classList.add('animate-click');
    setTimeout(() => button.classList.remove('animate-click'), 500);
}

// Button Actions
const buttonActions = {
    'get-started': '#signup',
    'explore-now': '#cybersecurity',
    'start-coding': 'https://github.com/markjptolentino',
    'build-a-site': '#web-dev',
    'hack-ethically': 'https://www.offensive-security.com/',
    'contact-us': '#contact',
    'login-btn': '/login',
    'signup-btn': '/signup'
};

Object.entries(buttonActions).forEach(([id, target]) => {
    const btn = document.getElementById(id);
    if (btn) {
        btn.addEventListener('click', function () {
            addClickAnimation(this);
            window.location.href = target;
        });
    }
});

document.getElementById('send-message')?.addEventListener('click', function (e) {
    e.preventDefault();
    addClickAnimation(this);
    const form = document.getElementById('contact-form');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Form Data:', data);
    alert('Message sent! (Check console)');
    form.reset();
});

document.querySelector('.search-icon')?.addEventListener('click', () => {
    alert('Search functionality coming soon!');
});

// Dark/Light Mode Toggle
const modeToggle = document.getElementById('mode-toggle');
modeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeToggle.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Background Music Toggle
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
musicToggle?.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.textContent = '🎶';
    } else {
        backgroundMusic.pause();
        musicToggle.textContent = '🎵';
    }
});

// Live Clock with Flip Animation
const liveClock = document.getElementById('live-clock');
let lastTime = '';

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });

    if (timeString !== lastTime) {
        liveClock.innerHTML = '';
        timeString.split('').forEach((char, i) => {
            const span = document.createElement('span');
            span.textContent = char;
            liveClock.appendChild(span);
            if (lastTime && lastTime[i] !== char) {
                span.classList.add('flip');
            }
        });
        lastTime = timeString;
    }
    requestAnimationFrame(updateClock);
}
requestAnimationFrame(updateClock);

// Typing Animation for Slogan
const sloganElement = document.getElementById('typing-slogan');
const slogans = ['Empowering Your Digital Future', 'Secure. Innovate. Excel.', 'Global Tech Solutions'];
let sloganIndex = 0;
let charIndex = 0;
let typing = true;

function typeSlogan() {
    if (typing) {
        if (charIndex < slogans[sloganIndex].length) {
            sloganElement.textContent += slogans[sloganIndex][charIndex];
            charIndex++;
        } else {
            typing = false;
            setTimeout(() => typing = true, 2000);
        }
    } else {
        if (sloganElement.textContent.length > 0) {
            sloganElement.textContent = sloganElement.textContent.slice(0, -1);
        } else {
            typing = true;
            charIndex = 0;
            sloganIndex = (sloganIndex + 1) % slogans.length;
        }
    }
    setTimeout(typeSlogan, typing ? 80 : 40);
}
typeSlogan();

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 4}px`;
    cursor.style.top = `${e.clientY - 4}px`;
});

document.addEventListener('mousedown', () => cursor.style.transform = 'scale(1.3)');
document.addEventListener('mouseup', () => cursor.style.transform = 'scale(1)');

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Tilt Effect
VanillaTilt.init(document.querySelectorAll('.content-box, .stat-box'), {
    max: 8,
    speed: 800,
    glare: true,
    'max-glare': 0.15
});

// Progress Bars
document.querySelectorAll('.progress-bar').forEach(bar => {
    bar.style.setProperty('--progress', `${bar.dataset.progress}%`);
});

// Stats Counter
function animateCounter(counter) {
    const target = +counter.dataset.target;
    let count = 0;
    const speed = 50;
    const increment = target / speed;

    function updateCount() {
        count += increment;
        if (count < target) {
            counter.textContent = Math.ceil(count);
            requestAnimationFrame(updateCount);
        } else {
            counter.textContent = target;
        }
    }
    updateCount();
}

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.counter').forEach(animateCounter);
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('#stats').forEach(stats => counterObserver.observe(stats));

// Scroll-to-Top Button
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Lazy Loading
const lazyElements = document.querySelectorAll('img[loading="lazy"], iframe[loading="lazy"]');
const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.src;
            lazyObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '0px 0px 200px 0px' });

lazyElements.forEach(el => lazyObserver.observe(el));

// Favicon Animation
const favicon = document.getElementById('favicon');
let faviconFrame = 0;
const faviconFrames = [
    'https://via.placeholder.com/32x32?text=GH',
    'https://via.placeholder.com/32x32?text=G'
];

function animateFavicon() {
    favicon.href = faviconFrames[faviconFrame];
    faviconFrame = (faviconFrame + 1) % faviconFrames.length;
    setTimeout(animateFavicon, 1000);
}
animateFavicon();

// Video Carousel
const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');
let currentIndex = 0;

function updateCarousel() {
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

carouselItems.forEach(item => {
    const iframe = item.querySelector('iframe');
    iframe.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
});

// Chat Bubble
document.getElementById('chat-bubble').addEventListener('click', () => {
    alert('Live chat coming soon! For now, email us at tolentinomarkjp@gmail.com');
});

// Logo Easter Egg
const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    logo.style.transform = 'scale(1.2) rotate(360deg)';
    setTimeout(() => logo.style.transform = 'scale(1)', 1000);
});

// Code Playground with Pyodide
let pyodide;

async function loadPyodideAndRun() {
    pyodide = await loadPyodide({
        indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.2/full/"
    });
    console.log('Pyodide loaded');
}

loadPyodideAndRun();

const tabButtons = document.querySelectorAll('.tab-btn');
const codeInputs = document.querySelectorAll('.code-editor code');
const runCodeBtn = document.getElementById('run-code');
const clearOutputBtn = document.getElementById('clear-output');
const copyCodeBtn = document.getElementById('copy-code');
const codeOutput = document.getElementById('code-output');
const resizer = document.querySelector('.resizer');
const editorPane = document.querySelector('.editor-pane');
const outputPane = document.querySelector('.output-pane');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        codeInputs.forEach(input => input.style.display = 'none');
        const activeInput = document.getElementById(btn.dataset.lang === 'html-css-js' ? 'code-input' : 'python-input');
        activeInput.style.display = 'block';
        Prism.highlightElement(activeInput);
    });
});

runCodeBtn.addEventListener('click', async () => {
    addClickAnimation(runCodeBtn);
    const activeTab = document.querySelector('.tab-btn.active').dataset.lang;
    const code = document.querySelector(`#${activeTab === 'html-css-js' ? 'code-input' : 'python-input'}`).textContent;
    codeOutput.innerHTML = '';

    if (activeTab === 'html-css-js') {
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        codeOutput.appendChild(iframe);

        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        iframeDoc.open();
        iframeDoc.write(code);
        iframeDoc.close();

        const originalConsoleLog = console.log;
        console.log = (...args) => {
            codeOutput.innerHTML += `<pre style="margin: 0.5rem 0; color: #00e676;">${args.join(' ')}</pre>`;
            originalConsoleLog(...args);
        };
        try {
            const scriptContent = code.match(/<script>([\s\S]*?)<\/script>/)?.[1] || '';
            iframe.contentWindow.eval(scriptContent);
        } catch (e) {
            codeOutput.innerHTML += `<pre style="color: #ff6e6e;">Error: ${e.message}</pre>`;
        }
        console.log = originalConsoleLog;
    } else if (activeTab === 'python') {
        if (!pyodide) {
            codeOutput.textContent = 'Pyodide is still loading, please wait...';
            return;
        }
        try {
            const output = await pyodide.runPythonAsync(`
                import sys
                from io import StringIO
                sys.stdout = StringIO()
                ${code}
                sys.stdout.getvalue()
            `);
            codeOutput.textContent = output || 'No output';
        } catch (e) {
            codeOutput.innerHTML = `<pre style="color: #ff6e6e;">Error: ${e.message}</pre>`;
        }
    }
});

clearOutputBtn.addEventListener('click', () => {
    addClickAnimation(clearOutputBtn);
    codeOutput.innerHTML = '';
});

copyCodeBtn.addEventListener('click', () => {
    addClickAnimation(copyCodeBtn);
    const activeTab = document.querySelector('.tab-btn.active').dataset.lang;
    const code = document.querySelector(`#${activeTab === 'html-css-js' ? 'code-input' : 'python-input'}`).textContent;
    navigator.clipboard.writeText(code).then(() => {
        copyCodeBtn.textContent = '✅';
        setTimeout(() => copyCodeBtn.textContent = '📋', 1000);
    });
});

// Resizable Split Pane
let isResizing = false;

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'col-resize';
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;
    const container = document.querySelector('.editor-container');
    const containerRect = container.getBoundingClientRect();
    const newEditorWidth = e.clientX - containerRect.left;
    const minWidth = 200;
    const maxWidth = containerRect.width - minWidth;

    if (newEditorWidth > minWidth && newEditorWidth < maxWidth) {
        editorPane.style.flex = `0 0 ${newEditorWidth}px`;
        outputPane.style.flex = `1 0 ${containerRect.width - newEditorWidth}px`;
    }
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
});

// Update Prism highlighting on input
codeInputs.forEach(input => {
    input.addEventListener('input', () => {
        Prism.highlightElement(input);
    });
});

// Resize Canvas
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});