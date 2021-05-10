import React from 'react';
import PropTypes from 'prop-types';

class InputTitleSubtitle extends React.Component {
  render() {
    const { state: { title, subtitle }, handleOnChange } = this.props;
    return (
      <div>
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ handleOnChange }
          />
        </label>

        <label
          htmlFor="subtitle"
          data-testid="subtitle-input-label"
        >
          Subtítulo
          <input
            name="subtitle"
            data-testid="subtitle-input"
            value={ subtitle }
            onChange={ handleOnChange }
          />
        </label>
      </div>
    );
  }
}

InputTitleSubtitle.propTypes = {
  state: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default InputTitleSubtitle;
