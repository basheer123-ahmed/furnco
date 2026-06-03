const fs = require('fs');
let content = fs.readFileSync('about.html', 'utf-8');

// Remove nav-active from Home
content = content.replace(
    '<li><a href="index.html" class="nav-active" id="nav-home">Home</a></li>',
    '<li><a href="index.html" id="nav-home">Home</a></li>'
);

// Add nav-active to About Us
content = content.replace(
    '<li><a href="about.html" id="nav-about">About Us</a></li>',
    '<li><a href="about.html" class="nav-active" id="nav-about">About Us</a></li>'
);

fs.writeFileSync('about.html', content);
console.log("Navbar active state fixed!");
