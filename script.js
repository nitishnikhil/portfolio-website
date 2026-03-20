// Typing Animation
const typingText = document.querySelector('.typing-text');
const fullText = 'Nitish Kumar';
let index = 0;

function typeText() {
    if (index < fullText.length) {
        typingText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeText, 100);
    } else {
        // Typing complete - add class to stop blinking
        typingText.classList.add('typing-complete');
    }
}

// Initialize typing on page load
window.addEventListener('load', () => {
    typeText();
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.fade-in');

const revealOnScroll = () => {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            if (!element.classList.contains('reveal-active')) {
                element.classList.add('reveal-active');
            }
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Smooth scrolling for buttons
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

// Add stagger animation to skill tags
const skillTags = document.querySelectorAll('.skill-tag');
skillTags.forEach((tag, index) => {
    tag.style.setProperty('--index', index);
});

// Project button interactions
const projectButtons = document.querySelectorAll('.project-btn');
projectButtons.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectBox = btn.closest('.project-box');
        const title = projectBox.querySelector('h3').textContent;
        showProjectDetails(title, index);
    });
});

function showProjectDetails(title, index) {
    const projects = [
        {
            name: 'Resume Tracking System',
            description: 'A comprehensive Flask-based application deployed on Azure cloud infrastructure.',
            tech: ['Flask', 'Python', 'Azure Cloud', 'SQL Database', 'Blob Storage'],
            features: ['Resume Upload', 'Real-time Tracking', 'Cloud Integration']
        },
        {
            name: 'IoT Smart Monitoring',
            description: 'Real-time sensor monitoring system using Arduino and ESP8266.',
            tech: ['Arduino', 'ESP8266', 'IoT', 'MQTT', 'C++'],
            features: ['Real-time Data', 'Wireless Communication', 'Remote Monitoring']
        },
        {
            name: 'Pi Digit Finder',
            description: 'Advanced mathematical computation using Bailey–Borwein–Plouffe algorithm.',
            tech: ['Java', 'Algorithm', 'Mathematics', 'Performance Optimization'],
            features: ['Million+ Digits', 'Optimized Computation', 'Fast Calculation']
        }
    ];
    
    const project = projects[index];
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    let techHTML = '';
    project.tech.forEach(t => {
        techHTML += '<span class="tech-tag">' + t + '</span>';
    });
    
    let featuresHTML = '';
    project.features.forEach(f => {
        featuresHTML += '<li>✓ ' + f + '</li>';
    });
    
    modal.innerHTML = '<div class="modal-content"><span class="modal-close">&times;</span><h2>' + project.name + '</h2><p class="modal-description">' + project.description + '</p><div class="modal-tech"><h3>Technologies</h3><div class="tech-tags">' + techHTML + '</div></div><div class="modal-features"><h3>Key Features</h3><ul>' + featuresHTML + '</ul></div></div>';
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
    
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const hero = document.querySelector('.hero');
    if (hero && scrollPosition < window.innerHeight) {
        hero.style.backgroundPosition = '0 ' + (scrollPosition * 0.5) + 'px';
    }
});

// Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.querySelector('.modal.active');
        if (modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    }
});

console.log('Portfolio website loaded with interactive features!');
