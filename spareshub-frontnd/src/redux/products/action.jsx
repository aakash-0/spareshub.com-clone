import * as types from "./actionTypes"
import axios from "axios"
const fetchDataRequest = (payload)=>{
    return {
        type:types.FETCH_DATA_REQUEST,
        payload
    }
}
const fetchDataSucess = (payload)=>{
    return {
        type:types.FETCH_DATA_SUCESS,
        payload
    }
}
const fetchDataFailure = (payload)=>{
    return {
        type:types.FETCH_DATA_FAILURE,
        payload
    }
}

const fetchData =(payload) =>{
    return (dispatch)=>{
        dispatch(fetchDataRequest())
    

    axios.get("/product")
    .then(r=>dispatch(fetchDataSucess(r.data)))
    .catch(e=>dispatch(fetchDataFailure(e.data)))
    }
}

const getSingleProductRequest = (payload)=>{
    return {
        type:types.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}
const getSingleProductSucess = (payload)=>{
    return {
        type:types.GET_SINGLE_PRODUCT_SUCESS,
        payload
    }
}
const getSingleProductFailure = (payload)=>{
    return {
        type:types.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}

const addDataRequest = (payload)=>{
    return {
        type:types.ADD_TO_CART_REQUEST,
        payload
    }
}
const addDataSucess = (payload)=>{
    return {
        type:types.ADD_TO_CART_SUCESS,
        payload
    }
}
const addDataFailure = (payload)=>{
    return {
        type:types.ADD_TO_CART_SUCESS,
        payload
    }
}







const addToCart = ({id,token})=>(dispatch)=>{
    dispatch(addDataRequest())
    fetch(`https://spareshub-clon.herokuapp.com/cart/add/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((res) => res.json())
      .then((cart) => {
        dispatch(addDataSucess(cart.user));
        localStorage.setItem("Userdata", JSON.stringify(cart.user));
      })
      .catch((e)=>dispatch(addDataFailure()));
}

const getSingleProduct = (id)=>(dispatch)=>{
    dispatch(getSingleProductRequest())
    axios.get(`/product/product/${id}`)
    .then(r=>dispatch(getSingleProductSucess(r.data)))
    .catch(e=>dispatch(getSingleProductFailure(e.data)))
}


export {fetchData,getSingleProduct,addToCart}