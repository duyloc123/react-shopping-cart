import React from "react";
import ImageSimple from "./ImageSimple";
import Button from "./Button";
import Typography from "./Typography";
import { userAppContext } from "../context/AppContext";

function CartList() {
  const { cart, deleteCart, plusProduct, minsProduct } = userAppContext();
  const totalPrice = cart.reduce((acc,curr) => acc += curr.price * curr.quanlity, 0);
  return (
    <>
       <div className="cardTop">
          <ImageSimple title = "icon" alt = "icon" src = "https://cdn-icons-png.flaticon.com/512/732/732084.png" />
          <Typography text = {`Total: ${cart.length}`} />
        </div>
        <div className="cardTitle">
          <Typography component="span" text="Your cart" />
          <Typography component="span" className= "card_amount" text= {`$${Math.floor(totalPrice)}`} />
        </div>
      <div className="cardBody">
        {cart.map((item) => {
          return (
            <div className="cardItem" key={item.id}>
              <div className="cardItem_left">
                <div className="cardItem_image">
                  <ImageSimple 
                  alt="icon" 
                  titlte="icon"
                  src={item.image} />
                </div>
              </div>
              <div className="cardItem_right">
                <Typography 
                className="cardItem_name" 
                text={item.name} />
                <Typography 
                className="cardItem_price"
                text={item.price} />
                <div className="cartItem_actions">
                  <div className="cartItem_count">
                    <div className="cartItem_button">
                      <Button 
                      onClick = {() => minsProduct(item.id)} 
                      bgColor="transparent" 
                      text="-" />
                    </div>
                    <div className="cartItem_number">{item.quanlity}</div>
                    <div className="cartItem_button">
                      <Button 
                      onClick = {() => plusProduct(item.id)}
                       bgColor="transparent" 
                       text="+" />
                    </div>
                  </div>
                  <div className="carItem_remove">
                    <Button
                      onClick = {() => deleteCart(item.id)}
                      bgColor="transparent"
                      icon={
                        <img
                          alt=""
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                        />
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CartList;
