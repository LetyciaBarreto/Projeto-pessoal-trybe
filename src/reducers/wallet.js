// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const initialState = {
  coins: [],
  expenses: [],
};

const wallet = (state = initialState, { type }) => {
  switch (type) {
  case 'WALLET':
    return {
      ...state,
    };
  default:
    return state;
  }
};
export default wallet;
