import {GET_PRODUCTS} from "./types";


//***** GET PRODUCTS *****//
export const getProducts = (themeType) => (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
    payload: themeType
 });
};
