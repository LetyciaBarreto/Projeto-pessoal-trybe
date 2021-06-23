// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  currencies: [],
  expenses: [],
};
// consulta https://github.com/tryber/sd-10b-live-lectures/blob/lecture/16.4/iss-location/src/reducers/issLocation.js
const wallet = (state = initialState, { type, payload }) => {
  switch (type) {
  case 'REQUEST_CURRENCIES':
    return {
      ...state,
      isFetching: payload.isFetching,
    };
  case 'REQUEST_CURRENCIES_SUCCESS':
    return {
      ...state,
      isFetching: payload.isFetching,
      currencies: payload.currencies,
    };
  case 'REQUEST_CURRENCIES_ERROR':
    return {
      ...state,
      error: payload.error,
      isFetching: payload.isFetching,
    };
  default:
    return state;
  }
};
export default wallet;
