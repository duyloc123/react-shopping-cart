import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { productReducer } from "../redux/product.reducer";
import { cartReducer } from "../redux/cart.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});

export const store = createStore(rootReducer, composeWithDevTools());

/* store
{
  product: {
    products: []
  },
  cart:  {
    carts: []
  }
}
*/
