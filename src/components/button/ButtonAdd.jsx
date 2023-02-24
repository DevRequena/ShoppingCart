import { useState } from "react";


export const ButtonAdd = (props) => {
  
  const [isActive, setIsActive] = useState(false);
  

  function toggleIsActive() {
      setIsActive(!isActive);
      addItem(props.item);
  }

  
  return (
    <div>
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
  )
}
