/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import axios from 'axios'
import Navbar from '../Home/Navbar'
class AllProduct extends Component {
 state = {
    persons : []
 } 

 componentDidMount(){
    axios.get('js/Api.json')
    .then( (result)=>{
        this.setState({
            persons : 
                result.data.products
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
            <img src={items.images[0]} className='img-fluid'style={{height:"350px"}}/>
           <h4 className='text-center'>{items.title}</h4>
           <h6 className='text-center'>{items.price}$</h6>
           </div>
           ))}
            </div>
         </div>
         
          
         

        
     </div> 
    )
  }
}

export default AllProduct