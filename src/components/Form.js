import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchExpensesApi, fetchRequestApi, requestExpenses } from '../actions';

// Requisito feito com ajuda de colegas no discord, mas preciso voltar e entender como fazer com o metodo success e error
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: '',
      description: '',
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

  handleOnClick() {
    const { fetchExpenses } = this.props;
    const { id } = this.state;
    this.setState({ id: id + 1 });
    fetchExpenses(this.state);
  }

  handleOnChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  selectCoin() {
    const { currencies } = this.props;
    return (
      <label htmlFor="currency">
        Moeda
        <select id="currency" name="currency" onChange={ this.handleOnChange }>
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
      <label htmlFor="method">
        Método de pagamento
        <select
          id="method"
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
          Valor
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
        <button
          type="button"
          onClick={ this.handleOnClick }
        >
          Adicionar depesa
        </button>
      </form>
    );
  }
}

const mapStateToProps = ({ wallet: { currencies, expenses } }) => ({
  currencies,
  expenses,
});

const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchRequestApi()),
  fetchExpenses: (expense) => dispatch(fetchExpensesApi(expense)),
  expensesAdd: (expenses) => dispatch(requestExpenses(expenses)),
});

Form.propTypes = {
  fetchRequest: PropTypes.func.isRequired,
  fetchExpenses: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
