import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchRequestApi } from '../actions';

class Form extends Component {
  componentDidMount() {
    const { fetchRequest } = this.props;
    fetchRequest();
  }

  render() {
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" id="value" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" id="description" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select id="coin" name="coin" options={ currencies }> </select>
        </label>
        <label htmlFor="methods">
          Método de pagamento:
          <select id="methods" name="methods">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select id="tag" name="tag">
            <option value="food">Alimentação</option>
            <option value="leisure">Lazer</option>
            <option value="work">Trabalho</option>
            <option value="transport">Transporte</option>
            <option value="health">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  fetchRequest: () => dispatch(fetchRequestApi()),
});
const mapStateToProps = ({ wallet: { currencies } }) => ({
  currencies,
});

Form.propTypes = {
  fetchRequest: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Form);
