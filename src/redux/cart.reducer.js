import { ADD_TO_CART, DELETE_CART, PLUS_CART_ITEM, MINUS_CART_ITEM } from "./cart.action"

const initialState = {
  carts: []
}

export const cartReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case ADD_TO_CART: {
      return {
        ...state,
        carts: [...state.carts, payload]
      }
    }
    case DELETE_CART: {
      return {
        ...state,
        carts: state.carts.filter(cart => cart.id !== payload)
      }
    }
    case PLUS_CART_ITEM: {
      const newCarts = JSON.parse(JSON.stringify(state.carts));
      const index = newCarts.findIndex(cart => cart.id === payload)
      newCarts[index].quanlity += 1;

      return {
        ...state,
        carts: newCarts
      }
    }
    case MINUS_CART_ITEM: {
      const newCarts = JSON.parse(JSON.stringify(state.carts));
      const index = newCarts.findIndex(cart => cart.id === payload)

      if(newCarts[index].quanlity === 1) {
        // remove this item in carts
        newCarts.splice(index, 1);
      } else {
        newCarts[index].quanlity -= 1;
      }

      return {
        ...state,
        carts: newCarts
      }
    }
    default:
      return state;
  }
}