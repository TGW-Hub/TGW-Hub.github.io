require('dotenv').config();

const browserify = require('browserify');
const fs = require('fs');
const path = require('path');
const envify = require('envify/custom');
const uglifyJS = require('uglify-js');

const files = ["login.js"];

const resolveFile = (fileName) => path.resolve(__dirname, "src/javascript", fileName);
const inputFiles = files.map(resolveFile);
const outputFile = path.resolve(__dirname, "public/javascript/bundle.min.js");

browserify({
  entries: inputFiles,
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
