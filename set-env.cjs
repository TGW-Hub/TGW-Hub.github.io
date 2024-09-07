const path = require('path');
const fs = require('fs');

const baseUrl = process.argv.includes('--baseUrl') ?
  process.argv[process.argv.indexOf('--baseUrl') + 1] :
  '';
const rootName = baseUrl.replaceAll("/", "");
const root = `/${rootName}`;

const envPath = path.resolve(__dirname, '.env')
const envContent = `ROOT_NAME=${root}\n`;
fs.writeFileSync(envPath, envContent, { 
  encoding: 'utf-8',
  flag: 'w'
});
