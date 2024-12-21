// constant
export const FETCH_PRODUCT = 'PRODUCT/FETCH_PRODUCT';

// action creator
export const fetchProduct = (payload) => {
  return {
    type: FETCH_PRODUCT,
    payload
  }
}
