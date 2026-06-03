// assets/js/about.js

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // 3. Hero Animations
    const heroTl = gsap.timeline();
    heroTl.to(".gsap-hero-text", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out"
    })
    .to(".gsap-hero-stats", {
        opacity: 1,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5");

    // 4. Counter Animation
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        
        ScrollTrigger.create({
            trigger: counter,
            start: "top 95%",
            once: true,
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2.5,
                    snap: { innerHTML: 1 },
                    ease: "power3.out",
                    onUpdate: function() {
                        counter.innerHTML = Math.round(counter.innerHTML);
                    }
                });
            }
        });
    });

    // 5. Generic Reveal Animations
    const revealElements = document.querySelectorAll('.gsap-reveal');
    revealElements.forEach(el => {
        gsap.fromTo(el, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 6. Parallax Images
    const parallaxWrappers = document.querySelectorAll('.gsap-parallax-img-wrapper');
    parallaxWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('.gsap-parallax-img');
        if(img) {
            gsap.fromTo(img, 
                { yPercent: -15 },
                {
                    yPercent: 15,
                    ease: "none",
                    scrollTrigger: {
                        trigger: wrapper,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        }
    });

    // 7. Watermark Parallax
    gsap.to(".parallax-watermark", {
        xPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".parallax-watermark",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    // 8. Horizontal Timeline (Brand Journey)
    const timelineScroll = document.querySelector('.timeline-scroll-container');
    if(timelineScroll) {
        gsap.to(".timeline-line-progress", {
            width: "100%",
            ease: "none",
            scrollTrigger: {
                trigger: ".timeline-section",
                start: "top 80%",
                end: "bottom 20%",
                scrub: true
            }
        });
    }

    // 9. Org Chart Connectors
    const connectors = document.querySelectorAll('.org-connector');
    connectors.forEach(conn => {
        gsap.fromTo(conn, 
            { scaleY: 0 },
            { 
                scaleY: 1, 
                transformOrigin: "top",
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: conn,
                    start: "top 80%"
                }
            }
        );
    });

    // 10. Magnetic Buttons
    const magneticBtns = document.querySelectorAll('.magnetic-btn');
    magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            gsap.to(btn, {
                x: x * 0.3,
                y: y * 0.3,
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Move text/content inside slightly more
            const content = btn.querySelector('.btn-content');
            if(content) {
                gsap.to(content, {
                    x: x * 0.1,
                    y: y * 0.1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });

        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "elastic.out(1, 0.3)"
            });
            const content = btn.querySelector('.btn-content');
            if(content) {
                gsap.to(content, {
                    x: 0,
                    y: 0,
                    duration: 0.7,
                    ease: "elastic.out(1, 0.3)"
                });
            }
        });
    });
});

