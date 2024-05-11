/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Home/Navbar'
export class AllItems extends Component {
    state = {
        persons : []
     } 
    
     componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then( (result)=>{
            this.setState({
                persons : 
                    result.data
            })
    
        })
     }
     
     
        render() {
        return (
         <div>
            <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
    
            <div className='container'>
            <div className='row'>
            {this.state.persons.map((items)=>(
               <div className='col-md-4 mb-4'>
            <img src={items.image} className='img-fluid'style={{height:"350px"}}/>
           
           </div>
           ))}
            </div>
         </div>
    
           
         </div> 
        )
      }
}

export default AllItems;