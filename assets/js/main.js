document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
            btn.setAttribute('aria-expanded', !expanded);
        });
    }

    // 2. Sticky Header styling on scroll
    const header = document.getElementById('site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });
    }

    // 3. Scroll Animations using Intersection Observer
    const animatedElements = document.querySelectorAll('.animate-fade-in-up');
    
    // Add CSS for the animation dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .opacity-0 { opacity: 0; }
        .opacity-100 { opacity: 1; }
        .translate-y-8 { transform: translateY(2rem); }
        .translate-y-0 { transform: translateY(0); }
        .transition-transform-opacity { transition-property: opacity, transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); transition-duration: 700ms; }
    `;
    document.head.appendChild(style);

    // Initial state setup for animations that should trigger on scroll (if any were not handled by tailwind classes directly)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('opacity-0', 'translate-y-8');
                entry.target.classList.add('opacity-100', 'translate-y-0');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Instead of complex CSS, we can just let Tailwind handle the base state, but let's 
    // manually apply the observer to any new elements we want to fade in on scroll.
    const scrollRevealElements = document.querySelectorAll('section > div > div, section > div > h2, section > div > p, .group');
    scrollRevealElements.forEach(el => {
        if (!el.classList.contains('animate-fade-in-up')) {
            el.classList.add('opacity-0', 'translate-y-8', 'transition-transform-opacity');
            observer.observe(el);
        }
    });
});
