import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor() {
    super();
    this.state = {
      movie: {},
      loading: true,
    };
  }

  async componentDidMount() {
    this.fetchDetails();
  }

   fetchDetails = async () => {
     const { match: { params: { id } } } = this.props;
     const result = await movieAPI.getMovie(id);
     this.setState({ movie: result, loading: false });
   }

   deleteMovie = async () => {
     const { match: { params: { id } } } = this.props;
     const remove = await movieAPI.deleteMovie(id);
     return remove;
   }

   render() {
     // Change the condition to check the state
     // if (true) return <Loading />;
     const { loading, movie } = this.state;
     const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

     if (loading) {
       return <Loading />;
     }

     return (
       <div data-testid="movie-details">
         <img alt="Movie Cover" src={ `../${imagePath}` } />
         <p>{ `Title: ${title}` }</p>
         <p>{ `Subtitle: ${subtitle}` }</p>
         <p>{ `Storyline: ${storyline}` }</p>
         <p>{ `Genre: ${genre}` }</p>
         <p>{ `Rating: ${rating}` }</p>
         <Link to={ `/movies/${id}/edit` }>EDITAR</Link>
         <Link to="/">VOLTAR</Link>
         <Link to="/" onClick={ this.deleteMovie }>DELETAR</Link>
       </div>
     );
   }
}

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes,
    }),
  }).isRequired,
};

export default MovieDetails;