// implement MovieList component here
import React from 'react';
import propTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        { movies.map((movie) => (<MovieCard key={ movie.title } movie={ movie } />)) }
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      subtitle: propTypes.string,
      storyline: propTypes.string,
      imagePath: propTypes.string,
      rating: propTypes.string,
    }),
  ).isRequired,
};

export default MovieList;
