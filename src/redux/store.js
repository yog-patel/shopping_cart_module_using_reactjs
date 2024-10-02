import {createStore} from 'redux';
import cartReducer from "./cartReducer.js";

export const store = createStore(cartReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());