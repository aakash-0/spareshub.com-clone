import * as types from "./actionTypes"
const initialState = {
    products:[],
    currentProduct:{},
    error:"",
    loading:true
}

export const productReducer = (state=initialState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.FETCH_DATA_REQUEST:
            return{
                ...state,
                error:"",
                loading:true
            }
        case types.FETCH_DATA_SUCESS:
            return {
                ...state,
                products:payload,
                error:"",
                loading:false
            }
        case types.FETCH_DATA_FAILURE:
            return {
                ...state,
                error:payload
            }


            case types.GET_SINGLE_PRODUCT_REQUEST:
                return{
                    ...state,
                    error:"",
                    loading:true
                    
                }
            case types.GET_SINGLE_PRODUCT_SUCESS:
                return {
                    ...state,
                    // products:payload,
                    error:"",
                    currentProduct:payload,
                    loading:false
                }
            case types.GET_SINGLE_PRODUCT_FAILURE:
                return {
                    ...state,
                    error:payload
                }
                case types.ADD_TO_CART_REQUEST:
                    return{
                        ...state,
                        error:"",
                        loading:true
                        
                    }
                case types.ADD_TO_CART_SUCESS:
                    return {
                        ...state,
                        // products:payload,
                        error:"",
                        payload,
                        loading:false
                    }
                case types.ADD_TO_CART_FAILURE:
                    return {
                        ...state,
                        error:payload
                    }
        default:
            return state;
    }
}