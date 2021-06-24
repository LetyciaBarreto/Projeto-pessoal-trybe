import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Table extends Component {
  constructor(props) {
    super(props);
    this.tableExpenses = this.tableExpenses.bind(this);
  }

  tableExpenses() {
    const { expenses } = this.props;
    return (
      expenses.map(({
        id, description, tag, method, value, currency, exchangeRates }) => {
        const coin = exchangeRates[currency];
        return (
          <tr key={ id }>
            <td>{description}</td>
            <td>{tag}</td>
            <td>{method}</td>
            <td>{value}</td>
            <td>{coin.name}</td>
            <td>{parseFloat(coin.ask).toFixed(2)}</td>
            <td>{(coin.ask * value).toFixed(2)}</td>
            <td>Real</td>
          </tr>
        );
      })
    );
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>{ this.tableExpenses() }</tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});

export default connect(mapStateToProps)(Table);
