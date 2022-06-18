import {legacy_createStore,applyMiddleware,combineReducers,compose}  from "redux"
import thunk from "redux-thunk";
import {productReducer} from "./products/reducer"
const rootReducer = combineReducers({ecommmerceData:productReducer});


export const store = legacy_createStore(
    rootReducer,
   compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)