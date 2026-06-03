const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf-8');

// 1. Fix the active link color that was overridden by high-specificity selectors
const styleBlockTarget = '#site-header.nav-top .nav-links a { color: #1A1A1A; font-weight: 600; }';
const styleBlockReplacement = `
      #site-header.nav-top .nav-links a { color: #1A1A1A; font-weight: 600; transition: color 0.3s; }
      #site-header.nav-top .nav-links a:hover,
      #site-header.nav-top .nav-links a.nav-active { color: #c9a84c !important; }
`;
content = content.replace(styleBlockTarget, styleBlockReplacement);

const scrolledStyleBlockTarget = '#site-header.nav-scrolled .nav-links a { color: #1A1A1A !important; }';
const scrolledStyleBlockReplacement = `
      #site-header.nav-scrolled .nav-links a { color: #1A1A1A !important; transition: color 0.3s; }
      #site-header.nav-scrolled .nav-links a:hover,
      #site-header.nav-scrolled .nav-links a.nav-active { color: #c9a84c !important; }
`;
content = content.replace(scrolledStyleBlockTarget, scrolledStyleBlockReplacement);

// 2. Fix the scroll lag
// Box-shadow combined with transforms (parallax, reveal) causes huge repaint lag on large screens
content = content.replace(/shadow-2xl/g, ''); 
content = content.replace(/shadow-\[0_0_30px_rgba\(200,169,107,0\.15\)\]/g, 'shadow-none hover:shadow-none'); // Disable heavy hover shadows on cards that move
content = content.replace(/backdrop-filter: blur\(20px\)/g, ''); // Blur filters over parallax are extremely laggy
content = content.replace(/-webkit-backdrop-filter: blur\(20px\)/g, '');

// Add will-change to elements that are animating via GSAP
const styleTagTarget = '</style>';
const willChangeCSS = `
      /* Performance optimizations */
      .gsap-reveal, .gsap-parallax-img, .parallax-watermark {
        will-change: transform, opacity;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      .glass-light, .glass-dark {
         background: rgba(255, 255, 255, 0.95);
      }
</style>
`;
content = content.replace(styleTagTarget, willChangeCSS);

fs.writeFileSync('about.html', content);
console.log("Fixed active link colors and scroll performance!");
