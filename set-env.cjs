const path = require('path');
const fs = require('fs');
const { randomBytes } = require('crypto');

const baseUrl = process.argv.includes('--baseUrl') ?
  process.argv[process.argv.indexOf('--baseUrl') + 1] :
  '';
const rootName = baseUrl.replaceAll("/", "");
const root = `/${rootName}`;

const SECRET = randomBytes(4).toString('hex');

const envPath = path.resolve(__dirname, '.env')
const envContent = 
  `ROOT_NAME=${root}\n` +
  `SECRET_KEY=${SECRET}`;

fs.writeFileSync(envPath, envContent, { 
  encoding: 'utf-8',
  flag: 'w'
});
