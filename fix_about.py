import os

# 1. Read index.html to extract the original navbar block
with open('index.html', 'r', encoding='utf-8') as f:
    index_lines = f.readlines()

# Extract original CSS links from head
head_links = """
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS (Original) -->
    <link rel="stylesheet" href="assets/css/style.css?v=2" />
    <!-- Global Animations JS -->
    <script src="assets/js/main.js" defer></script>
"""

# Extract the Navbar block (lines 23 to 363 roughly)
# Let's dynamically find it
navbar_start = -1
navbar_end = -1
for i, line in enumerate(index_lines):
    if "PREMIUM NAVBAR" in line:
        navbar_start = i
    if "<!-- ============================================================" in line and "CINEMATIC HERO SECTION" in line:
        navbar_end = i
        break

if navbar_start != -1 and navbar_end != -1:
    navbar_content = "".join(index_lines[navbar_start:navbar_end])
else:
    print("Could not find navbar block in index.html")
    exit(1)

# 2. Read about.html
with open('about.html', 'r', encoding='utf-8') as f:
    about_content = f.read()

# Replace the generated header with the original navbar_content
# Find the start and end of the generated header in about.html
gen_header_start = about_content.find("<!-- Header -->")
gen_header_end = about_content.find("</header>") + len("</header>")

if gen_header_start != -1 and gen_header_end != -1:
    about_content = about_content[:gen_header_start] + navbar_content + "\n" + about_content[gen_header_end:]

# Replace the fonts in about.html with head_links
fonts_start = about_content.find("<!-- Fonts -->")
fonts_end = about_content.find("<!-- Tailwind -->")
if fonts_start != -1 and fonts_end != -1:
    about_content = about_content[:fonts_start] + head_links + "\n    " + about_content[fonts_end:]

# 3. Fix the Hero section overlapping issue
# Replace the absolute positioning with flex-col justify-between and relative positioning
old_hero_start = '<section class="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-luxDark">'
new_hero_start = '<section class="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-luxDark pt-32 pb-8">'

about_content = about_content.replace(old_hero_start, new_hero_start)

# Add mt-auto to the text container
old_text_container = '<div class="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">'
new_text_container = '<div class="relative z-10 text-center px-4 max-w-5xl mx-auto my-auto">'
about_content = about_content.replace(old_text_container, new_text_container)

# Change the stats container from absolute to relative
old_stats_container = '<div class="absolute bottom-12 left-0 w-full z-10 px-8">'
new_stats_container = '<div class="relative w-full z-10 px-8 mt-auto">'
about_content = about_content.replace(old_stats_container, new_stats_container)


with open('about.html', 'w', encoding='utf-8') as f:
    f.write(about_content)

print("about.html updated successfully!")
