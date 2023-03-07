import React from 'react';
import './Header.css';

function Header(): JSX.Element {
  return (
    <div>
      <div>Menu</div>
      <div>Burger</div>
      <div>
        <div className="logo" />
        <div className="textLogo"> Первомайская</div>
      </div>
      <div className="phone">8 888 888 88 88</div>
    </div>
  );
}

export default Header;
