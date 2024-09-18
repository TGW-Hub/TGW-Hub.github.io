const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const Cookies = require('js-cookie');

const root = process.env.ROOT_NAME || "/";
const LOGIN_PATH = path.resolve(root, 'login');

document.addEventListener("DOMContentLoaded", function() {
  const loginStatus = Cookies.get("login-status");
  const SECRET = process.env.SECRET_KEY || "default-key";
  if(!loginStatus) {
    window.location = LOGIN_PATH;
    return;
  }
  bcrypt.compare(SECRET, loginStatus, (err, res) => {
    if(err) {
      console.error("Error:", err);
      window.location = LOGIN_PATH;
    }
    if(!res) {
      window.location = LOGIN_PATH;
    }
    return;
  });
})