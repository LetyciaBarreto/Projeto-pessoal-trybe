import React from 'react';
import Header from './components/Header';
import Movies from './data';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ Movies } />
    </div>
  );
}

export default App;
