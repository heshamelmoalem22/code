import React from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";

/* eslint-disable jsx-a11y/anchor-is-valid */
function Navbar (){
  const {totalItems} = useCart();
return(
        <CartProvider>
<nav className="navbar navbar-expand-lg navbar-light  p-2">
        <div className="container">
        <Link className="navbar-brand" to="/">StartBootstrap</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto align-items-center">
            <li className="nav-item active">
              <Link className="nav-link" to="/features">Features <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Download">Download </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">product</Link >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">Shoping</Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/Items">Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    {/* <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        <i className="fa-solid fa-comment"></i> Send Feedback
                    </button>
                    
                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="exampleModal" tabindex="-1" labelled="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/cart">
              <i class="fa-solid fa-cart-plus"></i>
              {totalItems}
              </Link>
            </li>
         
           </ul>
            
         
        </div>
    </div>
      </nav>
        </CartProvider>
    )
}
export default Navbar;