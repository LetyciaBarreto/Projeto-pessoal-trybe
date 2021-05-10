import React from 'react';

import PropTypes from 'prop-types';
import InputTitleSubtitle from './InputTitleSubtitle';
import InputImage from './InputImage';
import StorylineAndRating from './StorylineAndRating';

const InitialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};
class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = InitialState;
  }

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

ResetButton = (onClick, state) => {
  onClick(state);
  this.setState({ InitialState });
};

render() {
  const { onClick } = this.props;
  const { genre } = this.state;
  return (
    <form data-testid="add-movie-form">
      <InputTitleSubtitle state={ this.state } handleOnChange={ this.handleOnChange } />
      <InputImage state={ this.state } handleOnChange={ this.handleOnChange } />
      <StorylineAndRating handleOnChange={ this.handleOnChange } state={ this.state } />
      <label
        htmlFor="genre"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          data-testid="genre-input"
          value={ genre }
          onChange={ this.handleOnChange }
        >
          <option value="action" data-testid="genre-option">Ação</option>
          <option value="comedy" data-testid="genre-option">Comédia</option>
          <option value="thriller" data-testid="genre-option">Suspense</option>
        </select>
      </label>
      <button
        type="button"
        data-testid="send-button"
        onClick={ () => this.ResetButton(onClick, this.state) }
      >
        Adicionar filme
      </button>
    </form>
  );
}
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
