import { normalizeData } from '../utils';
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';

export const receiveData = (products) => ({type: RECEIVE_DATA, products: normalizeData(products)})
export const addToCart = ({id, price}) => ({type: ADD_TO_CART, id, price})
export const updateCart = ({id, price}) => ({type: UPDATE_CART, id, price})