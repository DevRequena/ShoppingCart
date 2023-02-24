import React, { useState } from "react";
import { useCart } from "react-use-cart";




const Products = (props) => {
  
  const {addItem} = useCart();

  const [isActive, setIsActive] = useState(false);
  

  function toggleIsActive() {
      setIsActive(!isActive);
      addItem(props.items);
  }

  return (
    <div>
      <li>
                <div class="plate">
                  <img src={props.image} alt={props.alt} className="plate" />
                </div>
                <div className="content">
                  <p className="menu-item">{props.name}</p>
                  <p className="price">{props.price}</p>                               
                  <button 
                      className={'add ' + (isActive ? "in-cart " : "")}
                      onClick={toggleIsActive} 
                  >
                  { isActive ? 
                      <>                  
                        <img src="images/check.svg" alt="Check" />
                          In Cart
                      </>
                      : 
                        "Add to Cart"
                  }
                </button>       
                </div>              
              </li>
    </div>
  )
}

export default Products