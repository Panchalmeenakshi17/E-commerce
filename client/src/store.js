import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginuserReducer, userSignupReducer} from "./reducers/userReducer";
 
let currentUser = localStorage.getItem('currentDonator') ? JSON.parse(localStorage.getItem('currentUser')) : null
 


const rootReducer = combineReducers({
 loginuserReducer,
 userSignupReducer
});
const initialState = {
  loginuserReducer : {
    currentUser
  },
 
};


const middleware = [thunk];

const store = createStore(rootReducer,initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
  + window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
export default store;