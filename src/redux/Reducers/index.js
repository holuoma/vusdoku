import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import productReducer from './productReducer';
import documentReducer from "./documentReducer";

const rootReducer = combineReducers({
   themeFields:themeReducer,
   products:productReducer,
   documents:documentReducer
})

export default rootReducer;