import React from 'react';
import PropTypes from 'prop-types';

class StorylineAndRating extends React.Component {
  render() {
    const { state: { storyline, rating }, handleOnChange } = this.props;
    return (
      <div>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ handleOnChange }
          />
        </label>
        <label
          htmlFor="rating"
          data-testid="rating-input-label"
        >
          Avaliação
          <input
            type="number"
            name="rating"
            data-testid="rating-input"
            value={ rating }
            onChange={ handleOnChange }
          />
        </label>
      </div>
    );
  }
}

StorylineAndRating.propTypes = {
  state: PropTypes.shape({
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default StorylineAndRating;
