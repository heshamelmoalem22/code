/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from '../Home/Navbar'
import { CartProvider, useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      totalItems,
      cartTotal,
  
      items,
      updateItemQuantity,
      removeItem,
      emptyCart
    } = useCart();
  
    if (isEmpty) return <p className="text-center"style={{fontSize:"30px"}}>Your cart is empty</p>;
  
    return (
      <div>
      <div className=" d-flex justify-content-center align-items-center ">
      <h1 className="text-center">Cart ({totalUniqueItems})</h1>
        <button onClick={()=>emptyCart()} className="btn btn-danger mx-3">delete all item</button>
      </div>
        
      <div className="container">
          <div className="row">
              <div className="col-md-10 m-auto">
              <table className="table table-dark text-center">
      <thead>
          <tr>
              <th>image</th>
              <th>name</th>
              <th>price</th>
              <th>quantity</th>
              <th>operations</th>
          </tr>
      </thead>
      <tbody>
          {items.map((result) => (
              
              <tr key={result.id}>
             <td>
              <img src={result.images[0]} style={{width:"60px"}}></img>
             </td>
              <td>{result.title}</td>
              <td>{result.price*result.quantity}<p style={{color:"green", display:"inline-block",margin:"2px",fontSize:"20px"}}>$</p></td>
              <td>{result.quantity}</td>
              <td>
              <button className="btn btn-warning"
                onClick={() => updateItemQuantity(result.id, result.quantity - 1)}
              >
                -
               </button>
              <button className="btn btn-success mx-2"
                onClick={() => updateItemQuantity(result.id, result.quantity + 1)}
              >
                +
              </button >
              <button  className="btn btn-danger" onClick={() => removeItem(result.id)}>&times;</button>
              </td>
              
            
        </tr>
        
          ))}
          <tr>
              <td>Total</td>
              <td>---------------</td>
              <td>{cartTotal}<p style={{color:"green", display:"inline-block",margin:"2px",fontSize:"20px"}}>$</p></td>
              <td>{totalItems}</td>
              <td>
                  <Link to="/shop" className="btn btn-primary">continue shoping</Link>
              </td>
          </tr>
      </tbody>
  
  
  
      </table>
              </div>
          </div>
      </div>
  
  
  
       
      </div>
    );
  }

function Allcart() {
  return (
    <CartProvider>
        <Navbar/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Cart/>
    </CartProvider>
  )
}

export default Allcart;