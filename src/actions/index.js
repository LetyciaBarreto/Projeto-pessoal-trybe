// Coloque aqui suas actions
export const LOGIN_EMAIL = 'LOGIN_EMAIL';

export const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  payload: { email },
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_EXPENSES = 'REQUEST_EXPENSES';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

export const requestCurrencies = (currencies) => ({
  type: REQUEST_CURRENCIES,
  payload: { currencies },
});

export function fetchRequestApi() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencie) => {
        delete currencie.USDT;
        dispatch(requestCurrencies(currencie));
      });
  };
}

export const requestExpenses = (expenses) => ({
  type: REQUEST_EXPENSES,
  payload: { expenses },
});

export const fetchExpensesApi = (expense) => (dispatch) => {
  fetch('https://economia.awesomeapi.com.br/json/all')
    .then((response) => response.json())
    .then((resp) => {
      expense.exchangeRates = resp;
      dispatch(requestExpenses(expense));
    });
};

export const deleteExpense = (deleteEX) => ({
  type: DELETE_EXPENSE,
  payload: { deleteEX },
});
