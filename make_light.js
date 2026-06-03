const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf-8');

// 1. Change the tailwind config to define a new light skin color
content = content.replace(
    "luxLight: '#F8F6F2',",
    "luxLight: '#F5EBE1'," // warm skin tone / cream color
);

// 2. We need to swap dark classes to light classes
// Hero Section
// <section class="... bg-luxDark ...">
content = content.replace(
    'bg-luxDark pt-32 pb-8"',
    'bg-luxLight pt-32 pb-8"'
);

content = content.replace(
    'from-luxDark/80 via-transparent to-luxDark',
    'from-luxLight/80 via-transparent to-luxLight'
);

// We need to change the hero text to dark
content = content.replace(
    'text-white font-playfair mb-6 tracking-tight gsap-hero-text',
    'text-[#1A1A1A] font-playfair mb-6 tracking-tight gsap-hero-text'
);

content = content.replace(
    'text-gray-300 font-light max-w-3xl',
    'text-gray-700 font-light max-w-3xl'
);

// Stats
content = content.replace(
    'border-t border-white/10 pt-8 gsap-hero-stats opacity-0',
    'border-t border-[#1A1A1A]/10 pt-8 gsap-hero-stats opacity-0'
);

content = content.replace(
    '<span class="text-xs tracking-widest uppercase text-gray-400">Years Experience</span>',
    '<span class="text-xs tracking-widest uppercase text-gray-700">Years Experience</span>'
);
content = content.replace(
    '<span class="text-xs tracking-widest uppercase text-gray-400">Projects Delivered</span>',
    '<span class="text-xs tracking-widest uppercase text-gray-700">Projects Delivered</span>'
);
content = content.replace(
    '<span class="text-xs tracking-widest uppercase text-gray-400">Cities Presence</span>',
    '<span class="text-xs tracking-widest uppercase text-gray-700">Cities Presence</span>'
);
content = content.replace(
    '<span class="text-xs tracking-widest uppercase text-gray-400">In-House Mfg</span>',
    '<span class="text-xs tracking-widest uppercase text-gray-700">In-House Mfg</span>'
);

content = content.replace(
    '<span class="text-[10px] tracking-widest uppercase text-gray-500 mb-6 rotate-90 origin-left translate-x-3">Scroll</span>',
    '<span class="text-[10px] tracking-widest uppercase text-gray-800 mb-6 rotate-90 origin-left translate-x-3">Scroll</span>'
);

// Also the scroll indicator needs to be visible against light background
content = content.replace(
    'background: rgba(255,255,255,0.1);',
    'background: rgba(0,0,0,0.1);'
);

fs.writeFileSync('about.html', content);
console.log("Converted Hero to light mode!");
