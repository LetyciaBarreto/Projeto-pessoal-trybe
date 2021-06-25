import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense } from '../actions';

class Table extends Component {
  constructor(props) {
    super(props);
    this.deleteEx = this.deleteEx.bind(this);
    this.tableEx = this.tableEx.bind(this);
  }

  deleteEx(index) {
    const { expenses, deleteExpenseFun: apagar } = this.props;
    const arrExpenses = [...expenses];
    arrExpenses.splice(index, 1);
    apagar(arrExpenses);
  }

  tableEx() {
    const { expenses } = this.props;
    return (
      expenses.map((
        { description, tag, method, value, currency, exchangeRates }, index,
      ) => (
        <tr key={ index }>
          <td>{description}</td>
          <td>{tag}</td>
          <td>{method}</td>
          <td>{value}</td>
          <td>
            {exchangeRates[currency].name.split('/')[0]}
          </td>
          <td>
            {parseFloat(exchangeRates[currency].ask).toFixed(2)}
          </td>
          <td>
            {parseFloat(value
              * exchangeRates[currency].ask).toFixed(2)}
          </td>
          <td>Real</td>
          <td>
            <button
              type="button"
              data-testid="delete-btn"
              onClick={ () => this.deleteEx(index) }
            >
              Deletar
            </button>
          </td>
        </tr>
      ))
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
        <tbody>
          { this.tableEx() }
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteExpenseFun: PropTypes.func.isRequired,
};
const mapStateToProps = ({ wallet: { expenses } }) => ({
  expenses,
});
const mapDispatchToProps = (dispatch) => ({
  deleteExpenseFun: (delExpense) => dispatch(deleteExpense(delExpense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
