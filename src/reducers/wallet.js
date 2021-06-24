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
      currencies: Object.keys(payload.currencies),
    };
  case 'REQUEST_EXPENSES':
    return {
      ...state,
      expenses: [...state.expenses, payload.expenses],
    };
  case 'DELETE_EXPENSE':
    return {
      ...state,
      expenses: payload,
    };
  default:
    return state;
  }
};
export default wallet;
