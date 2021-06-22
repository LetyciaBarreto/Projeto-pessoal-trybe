// Esse reducer será responsável por tratar as informações da pessoa usuária
import { LOGIN_EMAIL } from '../actions'

const initialState = {
  email: '',
};
const user = (state = initialState, { type, payload }) => {
  switch (type) {
  case LOGIN_EMAIL:
    return {
      ...state,
      email: payload.email,
    };
  default:
    return state;
  }
};

export default user;
