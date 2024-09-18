import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import bcrypt from 'bcryptjs';
import Cookies from 'js-cookie';
import './index.scss';

function LoginForm({ hashedPassword, homeUrl, hashedSecretKey }) {
  const [password, setPassword] = useState('');
  function handleOnInput(e) {
    setPassword(e.currentTarget.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const correctPassword = bcrypt.compareSync(password, hashedPassword);
    if(correctPassword) {
      Cookies.set("login-status", hashedSecretKey, {
        expires: 1,
        secure: true
      })
      window.location = homeUrl;
    } else {
      alert('パスワードが違います。');
    }
    setPassword('');
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <label for="password">パスワードを記入して下さい。</label>
      <input
        id="password"
        type="text"
        value={password}
        onInput={handleOnInput}
        autocomplete="off"
      />
      <input type="submit" value="認証"/>
    </form>
  )
}

export default LoginForm;