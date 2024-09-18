require('dotenv').config();

const browserify = require('browserify');
const fs = require('fs');
const path = require('path');
const envify = require('envify/custom');
const uglifyJS = require('uglify-js');

const fileName = process.argv[2];
if(!fileName) {
  console.error("You need to provide the file name inside of src/javascript");
  process.exit();
}
const fileNameWithoutExt = fileName.split(".")[0];
const inputFile = path.resolve(__dirname, "src/javascript", fileName);
const outputFile = path.resolve(__dirname, "public/javascript", `${fileNameWithoutExt}-bundle.min.js`);

browserify({
  entries: [inputFile],
})
  .require('crypto-browserify', { expose: 'crypto' })
  .transform(envify(process.env))
  .transform('brfs')
  .bundle((err, bundle) => {
    if (err) {
      console.error('Error during bundling:', err);
      return;
    }

    const minified = uglifyJS.minify(bundle.toString(), {
      compress: true, // Enable compression
      mangle: true    // Enable variable and function name mangling
    });

    if (minified.error) {
      console.error('Error during minification:', minified.error);
      return;
    }

    fs.writeFileSync(outputFile, minified.code);
    console.log(`Bundled and minified file written to ${outputFile}`);
});
