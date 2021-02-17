import React from 'react';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import { MovieState } from './Context/MovieContext'
import './App.css';

function App() {

  return (
    <MovieState>
      <Header />
      <MainContent />
    </MovieState>
  );
}

export default App;
