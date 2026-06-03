import os

html_content = """<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <title>About Us | Furnco Interiors</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
    <!-- Tailwind -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        luxDark: '#0A0A0A',
                        luxGray: '#111111',
                        luxLight: '#F8F6F2',
                        luxGold: '#C8A96B'
                    },
                    fontFamily: {
                        playfair: ['"Playfair Display"', 'serif'],
                        cormorant: ['"Cormorant Garamond"', 'serif'],
                        inter: ['Inter', 'sans-serif']
                    }
                }
            }
        }
    </script>
    <style>
        /* Lenis Smooth Scroll */
        html.lenis { height: auto; }
        .lenis.lenis-smooth { scroll-behavior: auto; }
        .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
        .lenis.lenis-stopped { overflow: hidden; }
        .lenis.lenis-scrolling iframe { pointer-events: none; }
        
        body { background-color: #0A0A0A; color: #F8F6F2; font-family: 'Inter', sans-serif; overflow-x: hidden; }
        
        /* Glassmorphism */
        .glass-dark {
            background: rgba(17, 17, 17, 0.4);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .glass-light {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        /* Magnetic Button */
        .magnetic-btn {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            border: 1px solid rgba(200, 169, 107, 0.5);
            transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease;
        }
        .magnetic-btn::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: #C8A96B;
            transform: scaleY(0);
            transform-origin: bottom;
            transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
            z-index: -1;
        }
        .magnetic-btn:hover {
            box-shadow: 0 0 20px rgba(200, 169, 107, 0.4);
            border-color: #C8A96B;
        }
        .magnetic-btn:hover::before {
            transform: scaleY(1);
            transform-origin: top;
        }
        
        /* Scroll Indicator */
        .scroll-indicator {
            width: 1px;
            height: 60px;
            background: rgba(255,255,255,0.1);
            position: relative;
            overflow: hidden;
        }
        .scroll-indicator::after {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 50%;
            background: #C8A96B;
            animation: scrollDown 2s infinite ease-in-out;
        }
        @keyframes scrollDown {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(200%); }
        }

        /* Marquee */
        .marquee-wrapper {
            overflow: hidden;
            white-space: nowrap;
            display: flex;
        }
        .marquee-content {
            display: flex;
            gap: 2rem;
            animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        
        .gsap-reveal { opacity: 0; transform: translateY(30px); }
        .parallax-watermark { color: rgba(255,255,255,0.02); }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
</head>
<body class="antialiased">

<!-- Header -->
<header id="site-header" class="fixed w-full z-50 transition-all duration-300 bg-transparent text-white border-b border-white/5 py-4">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a href="index.html" class="flex items-center gap-2">
            <span class="font-playfair text-2xl tracking-wider text-luxGold">FURNCO</span>
        </a>
        <nav class="hidden md:flex space-x-10 text-sm tracking-widest uppercase">
            <a href="index.html" class="hover:text-luxGold transition-colors">Home</a>
            <a href="about.html" class="text-luxGold">About Us</a>
            <a href="portfolio.html" class="hover:text-luxGold transition-colors">Portfolio</a>
        </nav>
        <div class="hidden md:block">
            <a href="contact.html" class="magnetic-btn px-6 py-3 rounded-full text-xs tracking-widest uppercase">
                <span class="btn-content">Contact Us</span>
            </a>
        </div>
    </div>
</header>

<!-- SECTION 01: CINEMATIC HERO -->
<section class="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-luxDark">
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover opacity-50">
        <source src="images/hero-video.mp4" type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-gradient-to-b from-luxDark/80 via-transparent to-luxDark"></div>
    
    <div class="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <h1 class="text-6xl md:text-8xl lg:text-9xl text-white font-playfair mb-6 tracking-tight gsap-hero-text opacity-0 translate-y-10">
            Crafting Spaces <br>
            <span class="text-luxGold italic font-cormorant">That Inspire</span>
        </h1>
        <p class="text-lg md:text-xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed gsap-hero-text opacity-0 translate-y-10">
            For over seven years, Furnco has transformed residential, commercial and hospitality spaces into timeless environments where design, functionality and craftsmanship coexist seamlessly.
        </p>
    </div>

    <!-- Stats -->
    <div class="absolute bottom-12 left-0 w-full z-10 px-8">
        <div class="max-w-7xl mx-auto flex flex-wrap justify-between items-end gap-8 border-t border-white/10 pt-8 gsap-hero-stats opacity-0">
            <div class="flex flex-col">
                <span class="text-4xl md:text-5xl text-luxGold font-playfair mb-2"><span class="counter" data-target="7">0</span>+</span>
                <span class="text-xs tracking-widest uppercase text-gray-400">Years Experience</span>
            </div>
            <div class="flex flex-col">
                <span class="text-4xl md:text-5xl text-luxGold font-playfair mb-2"><span class="counter" data-target="500">0</span>+</span>
                <span class="text-xs tracking-widest uppercase text-gray-400">Projects Delivered</span>
            </div>
            <div class="flex flex-col">
                <span class="text-4xl md:text-5xl text-luxGold font-playfair mb-2"><span class="counter" data-target="4">0</span>+</span>
                <span class="text-xs tracking-widest uppercase text-gray-400">Cities Presence</span>
            </div>
            <div class="flex flex-col">
                <span class="text-4xl md:text-5xl text-luxGold font-playfair mb-2"><span class="counter" data-target="100">0</span>%</span>
                <span class="text-xs tracking-widest uppercase text-gray-400">In-House Mfg</span>
            </div>
            
            <div class="hidden md:flex flex-col items-center ml-auto">
                <span class="text-[10px] tracking-widest uppercase text-gray-500 mb-6 rotate-90 origin-left translate-x-3">Scroll</span>
                <div class="scroll-indicator"></div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 02: OUR LEGACY -->
<section class="py-32 bg-luxGray relative overflow-hidden">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-playfair font-bold whitespace-nowrap pointer-events-none select-none parallax-watermark">
        FURNCO
    </div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="gsap-reveal">
                <span class="text-luxGold tracking-widest uppercase text-xs font-semibold mb-4 block">Our Legacy</span>
                <h2 class="text-5xl md:text-6xl font-playfair text-white mb-8">Redefining Modern Interiors</h2>
                <div class="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
                    <p>Founded with a vision to redefine modern interiors, Furnco Pvt Ltd has evolved into one of South India's trusted design and execution firms.</p>
                    <p>Operating from our advanced manufacturing facility in Bengaluru, we combine architectural innovation, German precision engineering and exceptional craftsmanship to create spaces that leave lasting impressions.</p>
                </div>
            </div>
            <div class="relative rounded-sm overflow-hidden gsap-parallax-img-wrapper">
                <img src="images/image.jpg" alt="Furnco Factory Collage" class="w-full h-auto object-cover gsap-parallax-img block">
                <div class="absolute inset-0 border border-white/10 m-4 pointer-events-none"></div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 03: MANUFACTURING EXCELLENCE -->
<section class="py-32 bg-luxLight text-luxDark relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="text-center mb-20 gsap-reveal">
            <span class="text-luxGold tracking-widest uppercase text-xs font-semibold mb-4 block">In-House Production</span>
            <h2 class="text-5xl md:text-6xl font-playfair">Precision Begins In Our Factory</h2>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div class="lg:col-span-5 flex flex-col justify-center space-y-8">
                <div class="flex items-start gap-5 gsap-reveal">
                    <div class="w-6 h-6 mt-1 rounded-full bg-luxGold/20 border border-luxGold flex flex-shrink-0 items-center justify-center text-luxGold text-xs">✓</div>
                    <div>
                        <h4 class="text-xl font-playfair font-semibold mb-2">German Machinery</h4>
                        <p class="text-gray-600 font-light text-sm">State-of-the-art imported equipment for millimeter precision.</p>
                    </div>
                </div>
                <div class="flex items-start gap-5 gsap-reveal">
                    <div class="w-6 h-6 mt-1 rounded-full bg-luxGold/20 border border-luxGold flex flex-shrink-0 items-center justify-center text-luxGold text-xs">✓</div>
                    <div>
                        <h4 class="text-xl font-playfair font-semibold mb-2">Modular Furniture Manufacturing</h4>
                        <p class="text-gray-600 font-light text-sm">Bespoke modular setups designed for aesthetics and durability.</p>
                    </div>
                </div>
                <div class="flex items-start gap-5 gsap-reveal">
                    <div class="w-6 h-6 mt-1 rounded-full bg-luxGold/20 border border-luxGold flex flex-shrink-0 items-center justify-center text-luxGold text-xs">✓</div>
                    <div>
                        <h4 class="text-xl font-playfair font-semibold mb-2">Acrylic Processing</h4>
                        <p class="text-gray-600 font-light text-sm">Flawless, high-gloss premium acrylic finishes.</p>
                    </div>
                </div>
                <div class="flex items-start gap-5 gsap-reveal">
                    <div class="w-6 h-6 mt-1 rounded-full bg-luxGold/20 border border-luxGold flex flex-shrink-0 items-center justify-center text-luxGold text-xs">✓</div>
                    <div>
                        <h4 class="text-xl font-playfair font-semibold mb-2">Premium Laminates</h4>
                        <p class="text-gray-600 font-light text-sm">Curated global materials ensuring luxury textures.</p>
                    </div>
                </div>
                <div class="flex items-start gap-5 gsap-reveal">
                    <div class="w-6 h-6 mt-1 rounded-full bg-luxGold/20 border border-luxGold flex flex-shrink-0 items-center justify-center text-luxGold text-xs">✓</div>
                    <div>
                        <h4 class="text-xl font-playfair font-semibold mb-2">Quality Controlled Production</h4>
                        <p class="text-gray-600 font-light text-sm">Rigorous multi-stage inspections before delivery.</p>
                    </div>
                </div>
            </div>
            
            <div class="lg:col-span-7 relative h-[600px] rounded-sm overflow-hidden gsap-reveal shadow-2xl">
                <!-- Fallback to image if video not suitable -->
                <img src="images/image2-aboutus.png" alt="Manufacturing" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-luxDark/10"></div>
                <div class="absolute bottom-6 left-6 right-6 p-6 glass-light text-luxDark border border-white/40">
                    <p class="font-cormorant italic text-2xl text-center">"Craftsmanship at scale."</p>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 04: WHY FURNCO -->
<section class="py-32 bg-luxDark relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-luxGold via-luxDark to-luxDark pointer-events-none"></div>
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 class="text-4xl md:text-5xl font-playfair text-center mb-16 text-luxLight gsap-reveal">Why Clients Choose Furnco</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Card 01 -->
            <div class="relative bg-luxGray p-10 rounded-sm border border-white/5 shadow-md hover:-translate-y-2 hover:border-luxGold/30 hover:shadow-lg hover:shadow-luxGold/5 transition-all duration-500 group overflow-hidden">
                <span class="absolute top-8 right-8 text-xs font-semibold tracking-widest text-luxGold/20 group-hover:text-luxGold/40 transition-colors duration-500">01</span>
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-luxGold group-hover:bg-[#C8A96B] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12"/></svg>
                </div>
                <h3 class="text-2xl font-playfair mb-3 text-white group-hover:text-luxGold transition-colors duration-500">7+ Years Of Excellence</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">Consistent delivery of unparalleled luxury across hundreds of projects.</p>
                <div class="w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-luxGold absolute bottom-0 left-0"></div>
            </div>

            <!-- Card 02 -->
            <div class="relative bg-luxGray p-10 rounded-sm border border-white/5 shadow-md hover:-translate-y-2 hover:border-luxGold/30 hover:shadow-lg hover:shadow-luxGold/5 transition-all duration-500 group overflow-hidden">
                <span class="absolute top-8 right-8 text-xs font-semibold tracking-widest text-luxGold/20 group-hover:text-luxGold/40 transition-colors duration-500">02</span>
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-luxGold group-hover:bg-[#C8A96B] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="m9.06 11.9 8.07-8.06a2 2 0 1 1 2.83 2.83l-8.06 8.07M14.5 4.5l5 5M4 14.88V20h5.12L20 9.12 14.88 4z"/></svg>
                </div>
                <h3 class="text-2xl font-playfair mb-3 text-white group-hover:text-luxGold transition-colors duration-500">Award-Winning Sila Architects</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">Backed by the architectural brilliance of industry-recognized visionaries.</p>
                <div class="w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-luxGold absolute bottom-0 left-0"></div>
            </div>

            <!-- Card 03 -->
            <div class="relative bg-luxGray p-10 rounded-sm border border-white/5 shadow-md hover:-translate-y-2 hover:border-luxGold/30 hover:shadow-lg hover:shadow-luxGold/5 transition-all duration-500 group overflow-hidden">
                <span class="absolute top-8 right-8 text-xs font-semibold tracking-widest text-luxGold/20 group-hover:text-luxGold/40 transition-colors duration-500">03</span>
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-luxGold group-hover:bg-[#C8A96B] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <h3 class="text-2xl font-playfair mb-3 text-white group-hover:text-luxGold transition-colors duration-500">Gold A Rated Design</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">Top-tier ratings for interior execution and spatial aesthetics.</p>
                <div class="w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-luxGold absolute bottom-0 left-0"></div>
            </div>

            <!-- Card 04 -->
            <div class="relative bg-luxGray p-10 rounded-sm border border-white/5 shadow-md hover:-translate-y-2 hover:border-luxGold/30 hover:shadow-lg hover:shadow-luxGold/5 transition-all duration-500 group overflow-hidden">
                <span class="absolute top-8 right-8 text-xs font-semibold tracking-widest text-luxGold/20 group-hover:text-luxGold/40 transition-colors duration-500">04</span>
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-luxGold group-hover:bg-[#C8A96B] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a7 7 0 0 0-7 7v4.66a7 7 0 0 0 14 0V9a7 7 0 0 0-7-7z"/></svg>
                </div>
                <h3 class="text-2xl font-playfair mb-3 text-white group-hover:text-luxGold transition-colors duration-500">Dynamic Business Award</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">Recognized as a leading, rapidly growing force in luxury interiors.</p>
                <div class="w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-luxGold absolute bottom-0 left-0"></div>
            </div>

            <!-- Card 05 -->
            <div class="relative bg-luxGray p-10 rounded-sm border border-white/5 shadow-md hover:-translate-y-2 hover:border-luxGold/30 hover:shadow-lg hover:shadow-luxGold/5 transition-all duration-500 group overflow-hidden">
                <span class="absolute top-8 right-8 text-xs font-semibold tracking-widest text-luxGold/20 group-hover:text-luxGold/40 transition-colors duration-500">05</span>
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-luxGold group-hover:bg-[#C8A96B] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M22 21H2M20 21V10l-4 4V10l-4 4V10L4 15v6"/></svg>
                </div>
                <h3 class="text-2xl font-playfair mb-3 text-white group-hover:text-luxGold transition-colors duration-500">State-Of-The-Art Factory</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">Our own advanced facility ensuring total quality control.</p>
                <div class="w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-luxGold absolute bottom-0 left-0"></div>
            </div>

            <!-- Card 06 -->
            <div class="relative bg-luxGray p-10 rounded-sm border border-white/5 shadow-md hover:-translate-y-2 hover:border-luxGold/30 hover:shadow-lg hover:shadow-luxGold/5 transition-all duration-500 group overflow-hidden">
                <span class="absolute top-8 right-8 text-xs font-semibold tracking-widest text-luxGold/20 group-hover:text-luxGold/40 transition-colors duration-500">06</span>
                <div class="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-8 text-luxGold group-hover:bg-[#C8A96B] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM9 12l2 2 4-4"/></svg>
                </div>
                <h3 class="text-2xl font-playfair mb-3 text-white group-hover:text-luxGold transition-colors duration-500">End-To-End Execution</h3>
                <p class="text-gray-400 font-light text-sm leading-relaxed">From initial blueprint to the final handover, a seamless turnkey experience.</p>
                <div class="w-0 group-hover:w-full transition-all duration-500 h-[2px] bg-luxGold absolute bottom-0 left-0"></div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 05: WHAT WE CREATE -->
<section class="py-32 bg-luxGray">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-playfair mb-16 text-white gsap-reveal">What We Create</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Category Card 01 -->
            <a href="portfolio.html" class="group relative h-[450px] overflow-hidden rounded-sm shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 block">
                <img src="images/gallery4.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-luxGold text-xs tracking-widest uppercase mb-2 block font-semibold">Residential & Commercial</span>
                    <h3 class="text-2xl font-playfair text-white mb-3">Commercial Interiors</h3>
                    <div class="w-8 h-[2px] bg-luxGold transition-all duration-500 group-hover:w-20"></div>
                </div>
            </a>
            
            <!-- Category Card 02 -->
            <a href="portfolio.html" class="group relative h-[450px] overflow-hidden rounded-sm shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 block">
                <img src="images/gallery5.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-luxGold text-xs tracking-widest uppercase mb-2 block font-semibold">Living Spaces</span>
                    <h3 class="text-2xl font-playfair text-white mb-3">Luxury Residences</h3>
                    <div class="w-8 h-[2px] bg-luxGold transition-all duration-500 group-hover:w-20"></div>
                </div>
            </a>
            
            <!-- Category Card 03 -->
            <a href="portfolio.html" class="group relative h-[450px] overflow-hidden rounded-sm shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 block">
                <img src="images/gallery6.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-luxGold text-xs tracking-widest uppercase mb-2 block font-semibold">Leisure Homes</span>
                    <h3 class="text-2xl font-playfair text-white mb-3">Farm Houses</h3>
                    <div class="w-8 h-[2px] bg-luxGold transition-all duration-500 group-hover:w-20"></div>
                </div>
            </a>
            
            <!-- Category Card 04 -->
            <a href="portfolio.html" class="group relative h-[450px] overflow-hidden rounded-sm shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 block">
                <img src="images/gallery1.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-luxGold text-xs tracking-widest uppercase mb-2 block font-semibold">Leisure & Recreation</span>
                    <h3 class="text-2xl font-playfair text-white mb-3">Resorts & Hospitality</h3>
                    <div class="w-8 h-[2px] bg-luxGold transition-all duration-500 group-hover:w-20"></div>
                </div>
            </a>
            
            <!-- Category Card 05 -->
            <a href="portfolio.html" class="group relative h-[450px] overflow-hidden rounded-sm shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 block">
                <img src="images/office-cabin.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-luxGold text-xs tracking-widest uppercase mb-2 block font-semibold">Workspaces</span>
                    <h3 class="text-2xl font-playfair text-white mb-3">Corporate Offices</h3>
                    <div class="w-8 h-[2px] bg-luxGold transition-all duration-500 group-hover:w-20"></div>
                </div>
            </a>
            
            <!-- Category Card 06 -->
            <a href="portfolio.html" class="group relative h-[450px] overflow-hidden rounded-sm shadow-md hover:-translate-y-2 hover:shadow-xl transition-all duration-500 block">
                <img src="images/gallery4-1.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115">
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500"></div>
                <div class="absolute bottom-0 left-0 w-full p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span class="text-luxGold text-xs tracking-widest uppercase mb-2 block font-semibold">Before & After</span>
                    <h3 class="text-2xl font-playfair text-white mb-3">Transformations</h3>
                    <div class="w-8 h-[2px] bg-luxGold transition-all duration-500 group-hover:w-20"></div>
                </div>
            </a>
        </div>
    </div>
</section>

<!-- SECTION 06: BRAND JOURNEY -->
<section class="py-32 bg-luxDark overflow-hidden relative timeline-section border-y border-white/5">
    <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
        <h2 class="text-4xl md:text-5xl font-playfair text-white gsap-reveal">Brand Journey</h2>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <!-- Scrollable parent wrapper -->
        <div class="w-full overflow-x-auto pb-6 hide-scrollbar">
            <!-- Full-width content container with absolute line references -->
            <div class="relative flex gap-12 pb-4 w-max">
                <!-- Connecting Line (Centered horizontally between node centers) -->
                <div class="absolute top-[64px] left-[128px] right-[128px] h-[2px] bg-white/10 pointer-events-none"></div>
                <div class="absolute top-[64px] left-[128px] h-[2px] bg-luxGold w-[70%] shadow-[0_0_8px_rgba(200,169,107,0.5)] pointer-events-none"></div>
                
                <!-- Node 1 (2018) -->
                <div class="flex-shrink-0 w-64 flex flex-col items-center text-center relative group gsap-reveal">
                    <div class="text-luxGold font-playfair text-3xl font-semibold mb-6 group-hover:scale-110 transition-transform duration-500">2018</div>
                    <div class="w-6 h-6 rounded-full bg-luxDark border-2 border-luxGold flex items-center justify-center relative z-10 transition-all duration-500 group-hover:bg-luxGold shadow-sm group-hover:shadow-md group-hover:shadow-luxGold/20">
                        <div class="w-2.5 h-2.5 rounded-full bg-luxGold group-hover:bg-white transition-all duration-500"></div>
                    </div>
                    <div class="mt-6 px-4">
                        <h4 class="text-lg text-white font-playfair font-semibold mb-2 group-hover:text-luxGold transition-colors duration-300">Founded</h4>
                        <p class="text-xs text-gray-400 font-light leading-relaxed">The vision of redefining luxury interiors began.</p>
                    </div>
                </div>
                
                <!-- Node 2 (2020) -->
                <div class="flex-shrink-0 w-64 flex flex-col items-center text-center relative group gsap-reveal delay-100">
                    <div class="text-luxGold font-playfair text-3xl font-semibold mb-6 group-hover:scale-110 transition-transform duration-500">2020</div>
                    <div class="w-6 h-6 rounded-full bg-luxDark border-2 border-luxGold flex items-center justify-center relative z-10 transition-all duration-500 group-hover:bg-luxGold shadow-sm group-hover:shadow-md group-hover:shadow-luxGold/20">
                        <div class="w-2.5 h-2.5 rounded-full bg-luxGold group-hover:bg-white transition-all duration-500"></div>
                    </div>
                    <div class="mt-6 px-4">
                        <h4 class="text-lg text-white font-playfair font-semibold mb-2 group-hover:text-luxGold transition-colors duration-300">Mfg. Expansion</h4>
                        <p class="text-xs text-gray-400 font-light leading-relaxed">Established state-of-the-art facility.</p>
                    </div>
                </div>
                
                <!-- Node 3 (2022) -->
                <div class="flex-shrink-0 w-64 flex flex-col items-center text-center relative group gsap-reveal delay-200">
                    <div class="text-luxGold font-playfair text-3xl font-semibold mb-6 group-hover:scale-110 transition-transform duration-500">2022</div>
                    <div class="w-6 h-6 rounded-full bg-luxDark border-2 border-luxGold flex items-center justify-center relative z-10 transition-all duration-500 group-hover:bg-luxGold shadow-sm group-hover:shadow-md group-hover:shadow-luxGold/20">
                        <div class="w-2.5 h-2.5 rounded-full bg-luxGold group-hover:bg-white transition-all duration-500"></div>
                    </div>
                    <div class="mt-6 px-4">
                        <h4 class="text-lg text-white font-playfair font-semibold mb-2 group-hover:text-luxGold transition-colors duration-300">Commercial Growth</h4>
                        <p class="text-xs text-gray-400 font-light leading-relaxed">Scaled to large corporate and hospitality sectors.</p>
                    </div>
                </div>
                
                <!-- Node 4 (2024) -->
                <div class="flex-shrink-0 w-64 flex flex-col items-center text-center relative group gsap-reveal delay-300">
                    <div class="text-luxGold font-playfair text-3xl font-semibold mb-6 group-hover:scale-110 transition-transform duration-500">2024</div>
                    <div class="w-6 h-6 rounded-full bg-luxDark border-2 border-luxGold flex items-center justify-center relative z-10 transition-all duration-500 group-hover:bg-luxGold shadow-sm group-hover:shadow-md group-hover:shadow-luxGold/20">
                        <div class="w-2.5 h-2.5 rounded-full bg-luxGold group-hover:bg-white transition-all duration-500"></div>
                    </div>
                    <div class="mt-6 px-4">
                        <h4 class="text-lg text-white font-playfair font-semibold mb-2 group-hover:text-luxGold transition-colors duration-300">Award Recognition</h4>
                        <p class="text-xs text-gray-400 font-light leading-relaxed">Honored with Dynamic Business Company Award.</p>
                    </div>
                </div>
                
                <!-- Node 5 (2026) -->
                <div class="flex-shrink-0 w-64 flex flex-col items-center text-center relative group gsap-reveal delay-400">
                    <div class="text-luxGold font-playfair text-3xl font-semibold mb-6 group-hover:scale-110 transition-transform duration-500">2026</div>
                    <div class="w-6 h-6 rounded-full bg-luxDark border-2 border-luxGold flex items-center justify-center relative z-10 transition-all duration-500 group-hover:bg-luxGold shadow-sm group-hover:shadow-md group-hover:shadow-luxGold/20">
                        <div class="w-2.5 h-2.5 rounded-full bg-luxGold group-hover:bg-white transition-all duration-500"></div>
                    </div>
                    <div class="mt-6 px-4">
                        <h4 class="text-lg text-white font-playfair font-semibold mb-2 group-hover:text-luxGold transition-colors duration-300">Regional Expansion</h4>
                        <p class="text-xs text-gray-400 font-light leading-relaxed">Growing presence across all of South India.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 07: LEADERSHIP -->
<section class="py-32 bg-luxGray relative overflow-hidden">
    <!-- Grid Background -->
    <div class="absolute inset-0 pointer-events-none opacity-[0.03]" style="background-image: linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px); background-size: 50px 50px;"></div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <h2 class="text-4xl md:text-5xl font-playfair text-center mb-24 text-white gsap-reveal">Meet The Visionaries</h2>
        
        <!-- Profile 1 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div class="flex justify-center lg:justify-start gsap-reveal">
                <div class="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-md flex-shrink-0">
                    <img src="images/rohitm.png" alt="Ar. Rohith Krishna M" class="w-full h-full object-cover object-top">
                </div>
            </div>
            <div class="gsap-reveal">
                <h3 class="text-4xl font-playfair text-white mb-2">Ar. Rohith Krishna M</h3>
                <span class="text-luxGold tracking-widest uppercase text-sm font-semibold mb-8 block">Founder & Director</span>
                <div class="space-y-6 text-gray-400 font-light text-lg">
                    <p>10+ years of experience in Architecture, Interior Design, Commercial Developments and Master Planning.</p>
                    <p>Graduate of SRM University, Chennai.</p>
                    <p>Leading design innovation and strategic collaborations across South India.</p>
                </div>
            </div>
        </div>
        
        <!-- Profile 2 -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="order-2 lg:order-1 gsap-reveal">
                <h3 class="text-4xl font-playfair text-white mb-2">Mr. Yashwanth Krishna M</h3>
                <span class="text-luxGold tracking-widest uppercase text-sm font-semibold mb-8 block">Director – Operations & Strategy</span>
                <div class="space-y-6 text-gray-400 font-light text-lg">
                    <p>11+ years of experience in Operations, Administration, Facility Management and Strategic Planning.</p>
                    <p>Engineering Graduate from Sathyabama University and MBA Operations from Manipal University.</p>
                    <p>Leads administration, compliance and business growth.</p>
                </div>
            </div>
            <div class="order-1 lg:order-2 flex justify-center lg:justify-end gsap-reveal">
                <div class="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-md flex-shrink-0">
                    <img src="images/yashwanthm.png" alt="Mr. Yashwanth Krishna M" class="w-full h-full object-cover object-top">
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 08: MISSION VISION VALUES -->
<section class="py-32 bg-luxDark relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Mission -->
            <div class="glass-dark p-12 rounded-sm text-center group hover:border-luxGold/50 hover:shadow-[0_0_20px_rgba(200,169,107,0.15)] transition-all duration-500 gsap-reveal">
                <span class="text-luxGold text-sm tracking-widest uppercase mb-6 block font-semibold">Our Mission</span>
                <p class="text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">Deliver exceptional customer satisfaction through superior design, precision execution and uncompromising quality.</p>
            </div>
            <!-- Vision -->
            <div class="glass-dark p-12 rounded-sm text-center group hover:border-luxGold/50 hover:shadow-[0_0_20px_rgba(200,169,107,0.15)] transition-all duration-500 gsap-reveal delay-100">
                <span class="text-luxGold text-sm tracking-widest uppercase mb-6 block font-semibold">Our Vision</span>
                <p class="text-gray-300 font-light leading-relaxed group-hover:text-white transition-colors">Establish world-class standards in architecture and interior design while becoming pioneers in creating extraordinary spaces.</p>
            </div>
            <!-- Values -->
            <div class="glass-dark p-12 rounded-sm text-center group hover:border-luxGold/50 hover:shadow-[0_0_20px_rgba(200,169,107,0.15)] transition-all duration-500 gsap-reveal delay-200">
                <span class="text-luxGold text-sm tracking-widest uppercase mb-6 block font-semibold">Our Values</span>
                <div class="flex flex-col gap-3 font-playfair text-xl text-gray-300 group-hover:text-white transition-colors">
                    <span>Integrity.</span>
                    <span>Transparency.</span>
                    <span>Craftsmanship.</span>
                    <span>Trust.</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SECTION 09: TEAM STRUCTURE -->
<section class="py-32 bg-luxLight text-luxDark text-center overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-playfair mb-16 gsap-reveal">Organizational Structure</h2>
        
        <div class="flex flex-col items-center space-y-0 text-lg md:text-xl font-cormorant font-semibold tracking-wide">
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Directors</div>
            <div class="h-12 w-px bg-luxGold org-connector origin-top -mt-1 -mb-1"></div>
            
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Principal Architect</div>
            <div class="h-12 w-px bg-luxGold org-connector origin-top -mt-1 -mb-1"></div>
            
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Architects</div>
            <div class="h-12 w-px bg-luxGold org-connector origin-top -mt-1 -mb-1"></div>
            
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Design Managers</div>
            <div class="h-12 w-px bg-luxGold org-connector origin-top -mt-1 -mb-1"></div>
            
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Site Engineers</div>
            <div class="h-12 w-px bg-luxGold org-connector origin-top -mt-1 -mb-1"></div>
            
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Business Consultants</div>
            <div class="h-12 w-px bg-luxGold org-connector origin-top -mt-1 -mb-1"></div>
            
            <div class="gsap-reveal bg-white px-8 py-4 rounded-sm shadow-md border border-gray-100 w-64 z-10">Contractors & Specialists</div>
        </div>
    </div>
</section>

<!-- SECTION 10: AWARDS & RECOGNITION -->
<section class="py-24 bg-luxGold text-luxDark overflow-hidden">
    <div class="marquee-wrapper py-4 border-y border-luxDark/20">
        <div class="marquee-content font-playfair text-3xl md:text-5xl italic">
            <span>National Award For Architecture & Design Excellence</span>
            <span class="mx-8">✦</span>
            <span>Gold A Interior Design Rating</span>
            <span class="mx-8">✦</span>
            <span>Dynamic Business Company Award</span>
            <span class="mx-8">✦</span>
            <!-- Duplicate for infinite loop -->
            <span>National Award For Architecture & Design Excellence</span>
            <span class="mx-8">✦</span>
            <span>Gold A Interior Design Rating</span>
            <span class="mx-8">✦</span>
            <span>Dynamic Business Company Award</span>
            <span class="mx-8">✦</span>
        </div>
    </div>
</section>

<!-- SECTION 11: FINAL CTA -->
<section class="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-luxDark">
    <video autoplay loop muted playsinline class="absolute top-0 left-0 w-full h-full object-cover opacity-30">
        <source src="images/hero-video.mp4" type="video/mp4">
    </video>
    <div class="absolute inset-0 bg-gradient-to-t from-luxDark via-transparent to-luxDark/80"></div>
    
    <div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-7xl text-white font-playfair mb-8 gsap-reveal">Let's Build Something <span class="text-luxGold italic font-cormorant">Extraordinary</span></h2>
        <p class="text-lg text-gray-300 font-light mb-12 leading-relaxed gsap-reveal delay-100">
            Whether you are creating a dream residence, corporate headquarters, hospitality destination or commercial development, Furnco combines architecture, craftsmanship and innovation to create spaces that stand apart.
        </p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center gsap-reveal delay-200">
            <a href="contact.html" class="magnetic-btn bg-luxGold text-luxDark px-10 py-5 rounded-sm font-semibold tracking-widest uppercase text-sm hover:text-white border-transparent">
                <span class="btn-content z-10">Start Your Project</span>
            </a>
            <a href="contact.html" class="magnetic-btn glass-dark text-white px-10 py-5 rounded-sm font-semibold tracking-widest uppercase text-sm hover:text-luxGold border-luxGold/50">
                <span class="btn-content z-10">Book Consultation</span>
            </a>
        </div>
    </div>
</section>

<!-- Scripts -->
<script src="https://unpkg.com/@studio-freight/lenis@1.0.34/dist/lenis.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="assets/js/about.js"></script>
</body>
</html>"""

with open("about.html", "w", encoding="utf-8") as f:
    f.write(html_content)
