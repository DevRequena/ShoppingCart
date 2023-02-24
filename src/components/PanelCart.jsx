import { useState } from 'react';
import './PanelCart.css'
import { useCount } from '../hook/useCount.js';
import { useCart } from "react-use-cart";


export const PanelCart = () => {


  const {quantity, increase, decrease} = useCount();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  console.log(items);

  return (
    <>
      <div className="panel cart">
      <h3>Your Cart</h3>
        { isEmpty ? <p className="empty">Your cart is empty</p> : 0 }


      <ul className="cart-summary">
        {
          items.map((item) => {
            return (
              <li>
                  <div className="plate">
                    <img src={item.image} alt={item.alt} className="plate" />
                    <div className="quantity">{item.quantity}</div>
                  </div>
                  <div className="content">
                    <p className="menu-item">{item.name}</p>
                    <p className="price">{item.price}</p>
                  </div>
                  <div className="quantity__wrapper">
                    <button 
                      className="decrease"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >
                      <img src="images/chevron.svg" />
                    </button>
                    <div className="quantity">{item.quantity}</div>
                    <button 
                      className="increase"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >
                      <img src="images/chevron.svg" />
                    </button>
                  </div>
                  <div className="subtotal">
                    {item.price}
                  </div>
              </li>
            )
          })
        } 
      </ul> 
      <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">{Math.round(cartTotal)}$</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">{Math.round((20 / 100) * cartTotal)}$</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">{Math.round(cartTotal + ((5 / 100) * cartTotal))}$</div>
        </div>
      </div>
    </div>
    </>
  )
}
