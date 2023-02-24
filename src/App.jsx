import { useState } from 'react';
import './App.css'
import { ButtonAdd } from './components/button/ButtonAdd';
import { PanelCart } from './components/PanelCart'
import { menuItems } from './menuItems';
import Products from './components/Products';
import { CartProvider } from "react-use-cart"


function App() {


  return (
    <CartProvider>
        <div className="App">
          <div className="panel">
            <h3>To Go Menu</h3>
          <ul className="menu">
              {
                menuItems.productData.map((items, index) => (
                  <Products 
                    image={items.image} 
                    alt={items.alt}
                    name={items.name}
                    price={items.price}
                    key={index}
                    id={items.id}
                    items={items}
                    />
                ))
              }
          </ul>
        </div>
          <PanelCart/>        
        </div>
    </CartProvider>
  )
}

export default App
