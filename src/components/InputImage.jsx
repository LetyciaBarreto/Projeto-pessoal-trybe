import React from 'react';
import PropTypes from 'prop-types';

class InputImage extends React.Component {
  render() {
    const { state: { imagePath }, handleOnChange } = this.props;
    return (
      <div>
        <label
          htmlFor="imagePath"
          data-testid="image-input-label"
        >
          Imagem
          <input
            type="text"
            name="imagePath"
            data-testid="image-input"
            value={ imagePath }
            onChange={ handleOnChange }
          />
        </label>
      </div>
    );
  }
}

InputImage.propTypes = {
  state: PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
  }).isRequired,
  handleOnChange: PropTypes.func.isRequired,
};

export default InputImage;
