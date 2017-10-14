import { RECEIVE_DATA } from '../actions';

const products = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return action.products;
    default:
      return state;
  }
}

export default products;