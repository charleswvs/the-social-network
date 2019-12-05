import React from 'react';
import logo from '../../assets/facebook-text.png'
import './Header.css';

function Header(){
  return(
    <div className="header">
      <img src={logo} alt="facebook-logo" className="facebook"></img>
      <span className="login">Minha Conta</span>
    </div>
  )
}

export default Header;