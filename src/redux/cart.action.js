// constant
export const ADD_TO_CART = 'CART/ADD_TO_CART';
export const DELETE_CART = 'CART/DELETE_CART';
export const PLUS_CART_ITEM = 'CART/PLUS_CART_ITEM';
export const MINUS_CART_ITEM = 'CART/MINUS_CART_ITEM';

// action creator
export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload
  }
}

export const deleteCart = (cartId) => {
  return {
    type: DELETE_CART,
    payload: cartId
  }
}

export const plusCartItem= (cartId) => {
  return {
    type: PLUS_CART_ITEM,
    payload: cartId
  }
}

export const minusCartItem = (cartId) => {
  return {
    type: MINUS_CART_ITEM,
    payload: cartId
  }
}

