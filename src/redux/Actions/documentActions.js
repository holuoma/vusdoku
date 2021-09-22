import {GET_DOCUMENTS, GET_FILTERED_DOCS, GET_RESULT} from './types'


//***** GET PRODUCTS *****//
export const getDocuments = (prodType) => (dispatch) => {
    dispatch({
      type: GET_DOCUMENTS,
      payload: prodType
   });
  };
//***** GET Result *****//
export const getResult = (docType) => (dispatch) => {
    dispatch({
      type: GET_RESULT,
      payload: docType
   });
  };
//***** GET Result *****//
export const getFilteredDocs = (value) => (dispatch) => {
    dispatch({
      type: GET_FILTERED_DOCS,
      payload: value
   });
  };