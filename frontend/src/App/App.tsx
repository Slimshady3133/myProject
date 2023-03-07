import React from 'react';
import './App.css';
import { Routes } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

function App(): JSX.Element {
  return (
    <div className="main">
      <Header />
      <Routes>{/* <Route index element={<Footer />} /> */}</Routes>
      <Footer />
    </div>
  );
}

export default App;
