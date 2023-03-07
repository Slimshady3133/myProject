import React from 'react';
import './Header.css';

function Header(): JSX.Element {
  return (
    <div className="mainContainer">
      <div>
        <div className="logo" />
      </div>
      <div className="textLogo"> Первомайская</div>
      <div className="mainMenu">
        <div className="menu">О комплексе</div>
        <div className="menu">Особенности</div>
        <div className="menu">Пентхаусы</div>
        <div className="menu">Выбрать квартиру</div>
      </div>

      <div className="phone">8 888 888 88 88</div>
      <div className="logo">
        <div className="logoInto" />
      </div>
    </div>
  );
}

export default Header;
