import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { email } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <section>
          <p>
            Email:
            <span data-testid="email-field">
              { email }
            </span>
          </p>
          <p>
            Despesa Total:
            <span data-testid="total-field">
              { 0 }
            </span>
          </p>
          <p>
            Câmbio
            <span data-testid="header-currency-field">
              BRL
            </span>
          </p>
        </section>
      </header>

    );
  }
}

const mapStateToProps = ({
  user: { email },
}) => ({
  email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
