// Coloque aqui suas actions
import { fetchAPI } from '../services';

export const LOGIN_EMAIL = 'LOGIN_EMAIL';

export const loginEmail = (email) => ({
  type: LOGIN_EMAIL,
  payload: { email },
});

export const REQUEST_CURRENCIES = 'REQUEST_CURRENCIES';
export const REQUEST_CURRENCIES_SUCCESS = 'REQUEST_CURRENCIES_SUCCES';
export const REQUEST_CURRENCIES_ERROR = 'REQUEST_CURRENCIES_ERROR';

export const requestCurrencies = () => ({
  type: REQUEST_CURRENCIES,
  payload: { isFething: true },
});
export const requestCurrenciesSucces = (currencies) => ({
  type: REQUEST_CURRENCIES_SUCCESS,
  payload: { isFething: false, currencies },
});
export const requestCurrenciesError = (error) => ({
  type: REQUEST_CURRENCIES_ERROR,
  payload: { isFething: false, error },
});

export const fetchRequestApi = () => (dispatch) => {
  dispatch(requestCurrencies());
  fetchAPI()
    .then((requestResponse) => dispatch(
      requestCurrenciesSucces(requestResponse),
    ))
    .catch((requestError) => dispatch(
      requestCurrenciesError(requestError),
    ));
};
