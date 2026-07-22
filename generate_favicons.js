const { Jimp } = require('jimp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, 'images', 'favicon.png');

async function generate() {
  console.log('Loading source image from: ' + sourceImage);
  const image = await Jimp.read(sourceImage);
  
  const targets = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  for (const target of targets) {
    console.log(`Generating ${target.name} (${target.size}x${target.size})...`);
    const resized = image.clone().resize({ w: target.size, h: target.size });
    await resized.write(path.join(__dirname, target.name));
  }

  // Generate favicon.ico (48x48px) as a PNG format saved as favicon.ico
  console.log('Generating favicon.ico (48x48)...');
  const icoResized = image.clone().resize({ w: 48, h: 48 });
  const buffer = await icoResized.getBuffer('image/png');
  fs.writeFileSync(path.join(__dirname, 'favicon.ico'), buffer);

  console.log('All favicons generated successfully!');
}

generate().catch(err => {
  console.error('Error generating favicons:', err);
});
