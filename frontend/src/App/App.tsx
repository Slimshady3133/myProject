import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import MainPage from '../Components/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <div className="main">
      <Header />
      <Routes>
        <Route index element={<MainPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
