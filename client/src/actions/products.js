import { GET_PRODUCTS,ADD_PRODUCT, REMOVE_PRODUCT } from './types';
import productJson from '../config/productList.json'
// Add item to cart
export const addItemToCart = (data) => dispatch => {
    dispatch({
        type: ADD_PRODUCT,
        payload: data
    });

};

export const removeItemFromCart = (data) => dispatch => {
    dispatch({
        type: REMOVE_PRODUCT,
        payload: data
    });

};

export const getProducts = () => dispatch => {
   dispatch({
                type: GET_PRODUCTS,
                 payload: productJson
            });
};
