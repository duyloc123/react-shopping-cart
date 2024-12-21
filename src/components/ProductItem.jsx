import React from 'react'
import { useDispatch  } from 'react-redux';
import Button from './Button'
import ImageSimple from './ImageSimple';
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/cart.action';

function ProductItem() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product.products)
  const carts = useSelector(state => state.cart.carts);

  function _addToCart(item) {
    dispatch(addToCart(item))
  }

  return (
    <>
      {products.map((item) => {
        const disabled = carts.some(cart => cart.id === item.id);

        return (
          <div key={item.id} className="shopItem">
            <div 
              className="shopItem_image"
              style={{
                backgroundColor: item.color
              }}
            >
              <ImageSimple 
                src={item.image}
                title=""
                alt=""
              />
            </div>
            <div className="shopItem_name">{item.name}</div>
            <div className="shopItem_description">{item.description}</div>
            <div className="shopItem_bottom">
              <div className="shopItem_price">${item.price}</div>
              {!disabled && (
                <div 
                  className="shopItem_button"
                  onClick={() => _addToCart(item)}
                  style={{
                    backgroundColor: disabled ? 'transparent' : ''
                  }}
                >
                  <Button
                    text="Added"
                    bgColor='transparent'
                  />
                </div>
              )}
            
            </div>
          </div>
        )
      })}
    </>
   
  )
}

export default ProductItem