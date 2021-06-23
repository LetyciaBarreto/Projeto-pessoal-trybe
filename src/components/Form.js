import React, { Component } from 'react';
// import { connect } from 'react-redux';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="value">
          Valor:
          <input type="text" name="value" />
        </label>
        <label htmlFor="description">
          Descrição:
          <input type="text" name="description" />
        </label>
        <label htmlFor="coin">
          Moeda:
          <select name="coin"> </select>
        </label>
        <label htmlFor="methods">
          Método de pagamento:
          <select name="methods">
            <option value="money">Dinheiro</option>
            <option value="creditCard">Cartão de crédito</option>
            <option value="debitCard">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Tag
          <select name="tag">
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
export default Form;
