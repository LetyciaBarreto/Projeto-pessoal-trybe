import React from 'react';
// import PropTypes from 'prop-types';

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = {
    //   subtitle: '',
      title: '',
    //   imagePath: '',
    //   storyline: '',
    //   rating: 0,
    //   genre: 'action',
    };
  }

  handleOnChange({ target: { value } }) {
    this.setState({
      title: value,
    });
  }

  render() {
    const { title } = this.state;
    // const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label
          htmlFor="title"
          data-testid="title-input-label"
        >
          Título
          <input
            id="title"
            data-testid="title-input"
            value={ title }
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
