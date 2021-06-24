import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRequestApi, requestExpenses, fetchRequestExpense } from '../actions';

// Requisito feito com ajuda de colegas no discord, mas preciso voltar e entender como fazer com o metodo success e error
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      description: '',
      coin: 'USD',
      methods: 'Dinheiro',
      tag: '',
      exchangeRates: {},
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.selectMethods = this.selectMethods.bind(this);
    this.selectCoin = this.selectCoin.bind(this);
    this.selectTag = this.selectTag.bind(this);
  }

  componentDidMount() {
    const { fetchRequest } = this.props;
    fetchRequest();
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleOnClick() {
    const { expenseRequest } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    expenseRequest(this.state);
  }

  selectCoin() {
    const { currencies } = this.props;
    return (
      <label htmlFor="coin">
        Moeda:
        <select id="coin" name="coin" onChange={ this.handleOnChange }>
          { currencies.map((coin) => (
            <option
              value={ coin }
              key={ coin }
            >
              { coin }
            </option>
          ))}
        </select>
      </label>
    );
  }

  selectMethods() {
    return (
      <label htmlFor="methods">
        Método de pagamento:
        <select
          id="methods"
          name="methods"
          onChange={ this.handleOnChange }
        >
          <option value="money">Dinheiro</option>
          <option value="creditCard">Cartão de crédito</option>
          <option value="debitCard">Cartão de débito</option>
        </select>
      </label>
    );
  }

  selectTag() {
    return (
      <label htmlFor="tag">
        Tag
        <select id="tag" name="tag" onChange={ this.handleOnChange }>
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }

  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" onChange={ this.handleOnChange } />
        </label>
        <label htmlFor="description">
          Descrição:
          <input
            type="text"
            id="description"
            name="description"
            onChange={ this.handleOnChange }
          />
        </label>
        { this.selectCoin() }
        { this.selectMethods() }
        { this.selectTag() }
        <button type="button" onClick={ this.handleOnClick }>
          Adicionar depesas
        </button>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchRequestApi()),
  expenseRequest: (expense) => dispatch(fetchRequestExpense(expense)),
  expensesAdd: (expenses) => dispatch(requestExpenses(expenses)),
});
const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

Form.propTypes = {
  fetchRequest: PropTypes.func.isRequired,
  expenseRequest: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
