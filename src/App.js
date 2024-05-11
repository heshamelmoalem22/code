
import React, { Component } from "react";
import Navbar from "./Home/Navbar";
import Header from "./Home/Header";
import About from "./Home/About";
import Device from "./Home/Device";
import Age from "./Home/Age";
import Download from "./Home/Download";
import Add from "./Home/Add";

import Footer from "./Home/Footer";
import { CartProvider } from "react-use-cart";


 class App extends Component {
  render(){
    return (
      <CartProvider>
        <Navbar />
        <Header />
        <About />
        <Device />
        
        
        <Age />
        <Download />
        <Add />
        <Footer />
       
        

      </CartProvider>
);
}
 
  }
  
  
  
 


export default App;
