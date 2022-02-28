import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';
// Requisito resolvido com ajuda de colegas;
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

   fetchMovies = async () => {
     const { getMovies } = movieAPI;
     const results = await getMovies();
     this.setState({ movies: results, loading: false });
   }

   render() {
     const { movies, loading } = this.state;

     // Render Loading here if the request is still happening
     if (loading) {
       return <Loading />;
     }

     return (
       <div data-testid="movie-list">
         {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
       </div>
     );
   }
}

export default MovieList;