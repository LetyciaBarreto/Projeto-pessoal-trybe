import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginEmail } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      butDisabled: true,
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.verifyEmailAndPassword = this.verifyEmailAndPassword.bind(this);
  }

  handleOnChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    },
    () => this.verifyEmailAndPassword());
  }

  verifyEmailAndPassword() {
    const { email, password } = this.state;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    const passwordLength = 5;
    if (regexEmail.test(email) && password.length > passwordLength) {
      this.setState({ butDisabled: false });
    } else {
      this.setState({ butDisabled: true });
    }
  }
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
  // https://stackoverflow.com/questions/3166738/minimum-6-characters-regex-expression/3167082

  render() {
    const { email, butDisabled } = this.state;
    const { loginState } = this.props;

    return (
      <form>
        <label htmlFor="email-input">
          <input
            data-testid="email-input"
            placeholder=" digite seu email"
            type="email"
            onChange={ this.handleOnChange }
          />
        </label>
        <label htmlFor="password-input">
          <input
            data-testid="password-input"
            placeholder=" digite sua senha"
            type="password"
            onChange={ this.handleOnChange }
          />
        </label>
        <Link to="/carteira">
          <button
            disabled={ butDisabled }
            type="submit"
            onClick={ () => loginState(email) }
          >
            Entrar
          </button>
        </Link>
      </form>
    );
  }
}
// const mapStateToProps = ({ user: { email } }) => ({
//   Email: email,
// });

const mapDispatchToProps = (dispatch) => ({
  loginState: (email) => dispatch(loginEmail(email)),
});

Login.propTypes = {
  loginState: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
