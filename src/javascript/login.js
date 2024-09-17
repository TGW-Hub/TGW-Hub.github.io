const bcrypt = require('bcryptjs');
const fs = require('fs');

const hashedPassword = fs.readFileSync("./passwd", 'utf-8');

const root = document.documentElement;
root.setAttribute("html-hide-document", "");
const password = prompt("パスワードを入れてください:");

if(bcrypt.compareSync(password, hashedPassword)) {
  console.log("ログイン！");
} else {
  console.log("だめ");
}