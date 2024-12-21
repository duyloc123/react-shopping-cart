import { FETCH_PRODUCT } from "./product.action"

const initialState = {
  products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case FETCH_PRODUCT: {
      return {
        ...state,
        products: payload || []
      }
    }
    default:
      return state;
  }
}