const fs = require('fs');

const indexContent = fs.readFileSync('index.html', 'utf-8');
const headLinks = `
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (Original) -->
    <link rel="stylesheet" href="assets/css/style.css?v=2" />
    <!-- Global Animations JS -->
    <script src="assets/js/main.js" defer></script>
`;

let navbarContent = "";
const startToken = "<!-- ============================================================";
const endToken = "<!-- ============================================================";

const lines = indexContent.split(/\r?\n/);
let startIndex = -1;
let endIndex = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("PREMIUM NAVBAR")) {
        // Look back for the start token
        for (let j = i; j >= 0; j--) {
            if (lines[j].includes(startToken)) {
                startIndex = j;
                break;
            }
        }
    }
    if (lines[i].includes("CINEMATIC HERO SECTION")) {
        for (let j = i; j >= 0; j--) {
            if (lines[j].includes(startToken)) {
                endIndex = j;
                break;
            }
        }
    }
}

if (startIndex !== -1 && endIndex !== -1) {
    navbarContent = lines.slice(startIndex, endIndex).join("\n");
} else {
    console.error("Could not find navbar in index.html");
    process.exit(1);
}

let aboutContent = fs.readFileSync('about.html', 'utf-8');

const genHeaderStart = aboutContent.indexOf("<!-- Header -->");
const genHeaderEnd = aboutContent.indexOf("</header>") + "</header>".length;

if (genHeaderStart !== -1 && genHeaderEnd !== -1) {
    aboutContent = aboutContent.substring(0, genHeaderStart) + navbarContent + aboutContent.substring(genHeaderEnd);
}

const fontsStart = aboutContent.indexOf("<!-- Fonts -->");
const fontsEnd = aboutContent.indexOf("<!-- Tailwind -->");

if (fontsStart !== -1 && fontsEnd !== -1) {
    aboutContent = aboutContent.substring(0, fontsStart) + headLinks + "\n    " + aboutContent.substring(fontsEnd);
}

aboutContent = aboutContent.replace(
    '<section class="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-luxDark">',
    '<section class="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-luxDark pt-32 pb-8">'
);

aboutContent = aboutContent.replace(
    '<div class="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">',
    '<div class="relative z-10 text-center px-4 max-w-5xl mx-auto my-auto">'
);

aboutContent = aboutContent.replace(
    '<div class="absolute bottom-12 left-0 w-full z-10 px-8">',
    '<div class="relative w-full z-10 px-8 mt-auto">'
);

fs.writeFileSync('about.html', aboutContent);
console.log("about.html updated successfully!");
