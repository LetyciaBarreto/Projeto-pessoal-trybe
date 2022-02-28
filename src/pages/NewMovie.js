import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
 handleSubmit = async (newMovie) => {
   const { history } = this.props;
   const result = await movieAPI.createMovie(newMovie);
   history.push('/');
  //  console.log(result);
 }

 render() {
   return (
     <div data-testid="new-movie">
       <MovieForm onSubmit={ this.handleSubmit } />
     </div>
   );
 }
}

NewMovie.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default NewMovie;
