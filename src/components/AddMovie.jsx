import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  handleOnChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { title, subtitle, imagePath, storyline } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            name="title"
            data-testid="title-input"
            value={ title }
            onChange={ this.handleOnChange }
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
            onChange={ this.handleOnChange }
          />
        </label>
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
            onChange={ this.handleOnChange }
          />
        </label>
        <label
          htmlFor="storyline"
          data-testid="storyline-input-label"
        >
          Sinopse
          <textarea
            name="storyline"
            data-testid="storyline-input"
            value={ storyline }
            onChange={ this.handleOnChange }
          />
        </label>
      </form>
    );
  }
}

AddMovie.propTypes = {
//   onClick: PropTypes.func.isRequired,
};

export default AddMovie;
