import { useState } from "react";

export const useCount = () => {
  
  const [quantity, setQuantity] = useState(1);

  const increase = () => setQuantity(quantity + 1);
  
  const decrease = () => setQuantity(quantity - 1);

  return {
    quantity,
    increase, 
    decrease
  }
}
