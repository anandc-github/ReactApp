import { combineReducers } from 'redux';
import alert from './alert'
import products from './products'
export default combineReducers({
    alert, products
});