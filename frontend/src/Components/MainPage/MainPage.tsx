/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './MainPage.css';

function MainPage(): JSX.Element {
  return (
    <div className="mainPage">
      <div className="sectionMenu">
        <div>Архитектура</div>
        <div>Благоустройство</div>
        <div>Безопасность</div>
        <div>Инженерия</div>
        <div>Инфраструктура</div>
        <div>Транспортная доступность</div>
      </div>
      <div className="description">
        <div>Архитектура</div>
        <div>
          Оригинальная архитектура жилого комплекса бизнес-класса «Первомайская» формирует
          современный стиль жизни
        </div>
      </div>
      <img src="1.png" alt="photo" className="photo1" />
    </div>
  );
}

export default MainPage;
