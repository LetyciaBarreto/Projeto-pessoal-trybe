import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact patch="/" component={ MovieList } />
        <Route exact patch="/movies/:id" component={ MovieDetails } />
        <Route exact patch="/movies/new" component={ NewMovie } />
        <Route exact patch="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
