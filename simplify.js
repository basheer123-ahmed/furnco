const fs = require('fs');

let content = fs.readFileSync('about.html', 'utf-8');

// 1. Change background color from beige to the original clean white/light gray
content = content.replace(/bg-\[#FAF4E8\]/g, 'bg-[#FAFAFA]');
content = content.replace(/from-\[#FAF4E8\]/g, 'from-[#FAFAFA]');
content = content.replace(/to-\[#FAF4E8\]/g, 'to-[#FAFAFA]');
content = content.replace(/rgba\(250, 244, 232/g, 'rgba(250, 250, 250');

// 2. Remove all GSAP animation classes to fix the "coming late" (lag) issue
// This will make all elements instantly visible without waiting for scroll.
content = content.replace(/gsap-reveal/g, '');
content = content.replace(/gsap-parallax-img-wrapper/g, '');
content = content.replace(/gsap-parallax-img/g, '');
content = content.replace(/opacity-0/g, '');
content = content.replace(/translate-y-10/g, '');
content = content.replace(/delay-100/g, '');
content = content.replace(/delay-200/g, '');
content = content.replace(/delay-300/g, '');
content = content.replace(/delay-400/g, '');

// Remove the massive watermark which can cause paint lag
content = content.replace(/<div class="absolute top-1\/2 left-1\/2 -translate-x-1\/2 -translate-y-1\/2 text-\[15vw\] font-playfair font-bold whitespace-nowrap pointer-events-none select-none parallax-watermark">[\s\S]*?<\/div>/, '');

// 3. Simplify the 5th image (Leadership profiles)
// Remove the dark gradients
content = content.replace(/<div class="absolute bottom-0 left-0 w-full h-1\/2 bg-gradient-to-t from-luxGray to-transparent"><\/div>/g, '');

// Simplify image wrappers for profiles
const profileImgRegex = /<div class="relative h-\[600px\] overflow-hidden rounded-sm border border-\[#1A1A1A\]\/10">\s*<img src="(images\/(rohitm|yashwanthm)\.png)" alt="[^"]+" class="absolute inset-0 w-full h-\[120%\] object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000">\s*<\/div>/g;

// Since we removed gsap classes above, we match the cleaned up version
// Actually, let's just use string replacement for the specific blocks

// Profile 1 (Rohith)
let profile1Old = `<div class="relative h-[600px] overflow-hidden rounded-sm  border border-[#1A1A1A]/10">
                <img src="images/rohitm.png" alt="Ar. Rohith Krishna M" class="absolute inset-0 w-full h-[120%] object-cover object-top  grayscale hover:grayscale-0 transition-all duration-1000">
                
            </div>`;
let profile1New = `<div class="relative rounded-sm border border-[#1A1A1A]/10 overflow-hidden">
                <img src="images/rohitm.png" alt="Ar. Rohith Krishna M" class="w-full h-auto max-h-[500px] object-cover object-top">
            </div>`;
content = content.replace(profile1Old, profile1New);

// Profile 2 (Yashwanth)
let profile2Old = `<div class="order-1 lg:order-2 relative h-[600px] overflow-hidden rounded-sm  border border-[#1A1A1A]/10">
                <img src="images/yashwanthm.png" alt="Mr. Yashwanth Krishna M" class="absolute inset-0 w-full h-[120%] object-cover object-top  grayscale hover:grayscale-0 transition-all duration-1000">
                
            </div>`;
let profile2New = `<div class="order-1 lg:order-2 relative rounded-sm border border-[#1A1A1A]/10 overflow-hidden">
                <img src="images/yashwanthm.png" alt="Mr. Yashwanth Krishna M" class="w-full h-auto max-h-[500px] object-cover object-top">
            </div>`;
content = content.replace(profile2Old, profile2New);


// Double check in case whitespace mismatch
content = content.replace(/class="absolute inset-0 w-full h-\[120%\] object-cover object-top  grayscale hover:grayscale-0 transition-all duration-1000"/g, 'class="w-full h-auto max-h-[500px] object-cover object-top"');
content = content.replace(/class="relative h-\[600px\] overflow-hidden rounded-sm  border border-\[#1A1A1A\]\/10"/g, 'class="relative rounded-sm border border-[#1A1A1A]/10 overflow-hidden"');
content = content.replace(/class="order-1 lg:order-2 relative h-\[600px\] overflow-hidden rounded-sm  border border-\[#1A1A1A\]\/10"/g, 'class="order-1 lg:order-2 relative rounded-sm border border-[#1A1A1A]/10 overflow-hidden"');

fs.writeFileSync('about.html', content);
console.log("Fixed lag and simplified images!");
