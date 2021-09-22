import { GET_THEME_FIELD } from "../Actions/types";

const initialState = {
  fields:[
    {id:1, name:"Fiels 1", value:"theme1"},
    {id:2, name:"Fiels 2", value:"theme2"},
    {id:3, name:"Fiels 3", value:"theme3"},
    {id:4, name:"Fiels 4", value:"theme4"},
    {id:5, name:"Fiels 5", value:"theme5"},
   
  ]
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_THEME_FIELD:
      return {
        ...state,
        fields:state.fields
      };
    default:
      return state;
  }
}

export default themeReducer;