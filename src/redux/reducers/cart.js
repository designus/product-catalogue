import { ADD_TO_CART, UPDATE_CART } from '../actions';

const SHIPPING_PRICE = 140;
const INSTALLATION_PRICE = 1200;

const initialCartState = {
  products: {},
  shippingPrice: SHIPPING_PRICE,
  installationPrice: INSTALLATION_PRICE,
  totalSum: SHIPPING_PRICE + INSTALLATION_PRICE
}

const cart = (state = initialCartState, action) => {
  const price = action.price;
  const totalSum = state.totalSum + price
  
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        totalSum,
        products: {
          ...state.products,
          [action.id]: {
            id: action.id,
            price,
            quantity: 1,
            subTotal: price
          }
        }
      }
    case UPDATE_CART:
      const quantity = state.products[action.id].quantity + 1;
      
      return {
        ...state, 
        totalSum,
        products: {
          ...state.products,
          [action.id]: {
            ...state.products[action.id],
            quantity,
            subTotal: price * quantity
          }
        }
      }
      
    default:
      return state; 
  }
}

export default cart;