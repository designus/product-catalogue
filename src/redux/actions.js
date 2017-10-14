import { normalizeData } from '../utils';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const receiveData = (products) => ({type: RECEIVE_DATA, products: normalizeData(products)})