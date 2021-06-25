import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props) {
    super(props);

    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    const sum = expenses.reduce(
      (acc, curr) => acc + (curr.exchangeRates[curr.currency].ask * curr.value),
      0,
    );
    return parseFloat(sum).toFixed(2);
  }

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
              { this.sumExpenses() }
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
  user: { email }, wallet: { expenses },
}) => ({
  email,
  expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);
