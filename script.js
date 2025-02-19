// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Certificate cards interaction
const certCards = document.querySelectorAll('.cert-card');
certCards.forEach(card => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        certCards.forEach(c => c.classList.remove('active'));
        // Add active class to clicked card
        card.classList.add('active');
    });
});

// Animate skill bars on scroll
const skillCards = document.querySelectorAll('.skill-card');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.querySelector('.progress');
            if (progress) {
                const width = progress.style.width;
                progress.style.width = '0';
                setTimeout(() => {
                    progress.style.width = width;
                }, 100);
            }
        }
    });
}, {
    threshold: 0.5
});

skillCards.forEach(card => observer.observe(card));