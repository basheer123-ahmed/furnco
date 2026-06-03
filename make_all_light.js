const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf-8');

// Replace backgrounds
content = content.replace(/bg-luxGray/g, 'bg-[#FAF4E8]'); // Using the light theme skin color
content = content.replace(/bg-luxDark/g, 'bg-[#FAF4E8]');
content = content.replace(/bg-luxLight/g, 'bg-[#FAF4E8]'); 

// Since the whole page is light, let's invert all text-white and text-gray-400 where they are meant for dark backgrounds
content = content.replace(/text-white/g, 'text-[#1A1A1A]');
content = content.replace(/text-gray-400/g, 'text-gray-700');
content = content.replace(/text-gray-300/g, 'text-gray-700');
content = content.replace(/text-luxLight/g, 'text-[#1A1A1A]');

// Glassmorphism updates
content = content.replace(/glass-dark/g, 'glass-light');

// Borders
content = content.replace(/border-white\/10/g, 'border-[#1A1A1A]/10');
content = content.replace(/border-white\/20/g, 'border-[#1A1A1A]/20');
content = content.replace(/border-white\/40/g, 'border-[#1A1A1A]/40');
content = content.replace(/border-luxLight\/20/g, 'border-[#1A1A1A]/20');

// Parallax watermark (FURNCO text in background)
content = content.replace(/text-\[rgba\(255,255,255,0\.02\)\]/g, 'text-[rgba(0,0,0,0.03)]');
// In case the watermark was using a class
content = content.replace(/\.parallax-watermark\s*\{\s*color:\s*rgba\(255,255,255,0\.02\);\s*\}/g, '.parallax-watermark { color: rgba(0,0,0,0.04); }');

// Specific section backgrounds or overlays
content = content.replace(/from-luxDark/g, 'from-[#FAF4E8]');
content = content.replace(/to-luxDark/g, 'to-[#FAF4E8]');

// Add the navbar color override since the top of the page is now light
const navOverride = `
    <style>
      /* Override navbar colors for the light page */
      #site-header.nav-top .nav-links a { color: #1A1A1A; font-weight: 600; }
      #site-header.nav-top .nav-logo-wrap img { filter: brightness(0); }
      #site-header.nav-top #nav-hamburger .ham-line { background: #1A1A1A; }
      #site-header.nav-top #nav-hamburger { border-color: rgba(26,26,26,0.22); }
      #site-header.nav-top .mobile-nav-close { color: #1A1A1A; border-color: rgba(26,26,26,0.22); }
      
      /* Make scrolled navbar light too */
      #site-header.nav-scrolled {
        background: rgba(250, 244, 232, 0.95) !important;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }
      #site-header.nav-scrolled .nav-links a { color: #1A1A1A !important; }
      #site-header.nav-scrolled .nav-logo-wrap img { filter: brightness(0) !important; }
      #site-header.nav-scrolled #nav-hamburger .ham-line { background: #1A1A1A !important; }
      #site-header.nav-scrolled #nav-hamburger { border-color: rgba(26,26,26,0.22) !important; }
    </style>
`;

if (!content.includes('/* Override navbar colors for the light page */')) {
    content = content.replace('</head>', navOverride + '\n</head>');
}

fs.writeFileSync('about.html', content);
console.log("Completely converted about.html to light theme!");
