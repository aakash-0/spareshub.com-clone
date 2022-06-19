import React from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import "./cart.css"
import { useState } from 'react'
import { Link } from "react-router-dom"
function Cart() {
  // const cart = useSelector(store=>store.ecommmerceData.payload.cart.items)
  const [caart,setCaart] = useState([]);
  useEffect(()=>{
    let token = JSON.parse(localStorage.getItem("UserToken"))||[];
    fetch(`https://spareshub-clon.herokuapp.com/cart/getcart`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        setCaart(cart);
      })
  },[])
useEffect(()=>{},[caart])
  function handelRemove(id){
    let token = JSON.parse(localStorage.getItem("UserToken"));
    fetch(`https://spareshub-clon.herokuapp.com/cart/delete/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        localStorage.setItem("Userdata", JSON.stringify(cart.user));
        setCaart(cart);
      });

  }

  return (
    
    <div className='cotainer'>
      {caart?.cart?.items?.length===0?<h2>Cart is empty</h2>:
      <div className='list'>
        {
          caart?.cart?.items?.map(e=>{
            return(
            <div className='items'>
          <div className='image-container'>
            <img src={e.productId.Image}  />
          </div>
          <div className='cart-details'>
            <h1>{e.productId.name}</h1>
            <br></br>
            <br></br>
            <h1>Rs{e.productId.price}</h1>
            <button onClick={()=>{handelRemove(e.productId._id)}} className='remove'>Remove</button>
            
          </div>
        </div>)
          })
        }
         <Link className='list checkout' to={"/checkout"}>
        <button
         >Checkout</button>
        </Link>
      </div>
      
}
     

    </div>
  )
}

export default Cart