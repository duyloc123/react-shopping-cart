import React from 'react'
import Button from './Button'
import { useAppContext } from '../contexts/AppContext'
import ImageSimple from './ImageSimple';

function ProductItem() {
  const { products, addToCart, carts } = useAppContext();

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
                  style={{
                    backgroundColor: disabled ? 'transparent' : ''
                  }}
                >
                  <Button
                    text="Added"
                    bgColor='transparent'
                    onClick={() => addToCart(item.id)}
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