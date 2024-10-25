import React from "react";
import Button from "./Button.jsx";
import ImageSimple from "./ImageSimple.jsx";
import Typography from "./Typography.jsx";
import { userAppContext } from "../context/AppContext.jsx";

function ProductList() {
  const { product, AddToCart, cart } = userAppContext();
  return (
    <>
      <div className="cardBody">
        {product.map((item) => {
          const disable = cart.some((cart) => cart.id === item.id);
          return (
            <div key={item.id} className="shopItem">
              <div
                className="shopItem_image"
                style={{ backgroundColor: item.color }}
              >
                <ImageSimple
                  alt="itemProduct"
                  title="itemProduct"
                  src={item.image}
                />
              </div>
              <Typography className="shopItem_name" text={item.name} />
              <Typography
                className="shopItem_description"
                text={item.description}
              />
              <div className="shopItem_bottom">
                <Typography
                  className="shopItem_price"
                  text={`$${item.price}`}
                />
                {!disable && (
                  <div
                    className="shopItem_button"
                    style={{ background: disable ? "transparent" : null }}
                  >
                    <Button
                      onClick={() => AddToCart(item.id)}
                      text="Added"
                      bgColor="transparent"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
