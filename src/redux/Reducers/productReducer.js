import { GET_PRODUCTS } from "../Actions/types";

const initialState = {
  themes: [
    {
      key: "theme1",
      products: [
        { id: 1, name: "product 1", value:"product1" },
        { id: 2, name: "product 2", value:"product2" },
        { id: 3, name: "product 3", value:"product3" },
        { id: 4, name: "product 4", value:"product4" },
        { id: 5, name: "product 5", value:"product5" },
      ]
    },
    {
      key: "theme2",
      products: [
        { id: 1, name: "product 1", value:"product1"},
        { id: 2, name: "product 2", value:"product2" },
        { id: 3, name: "product 3", value:"product3" },
        { id: 4, name: "product 4", value:"product4" },
        { id: 5, name: "product 5", value:"product5" },
      ]
    },
    {
      key: "theme3",
      products: [
        { id: 1, name: "product 1", value:"product1" },
        { id: 2, name: "product 2", value:"product2" },
        { id: 3, name: "product 3", value:"product3" },
        { id: 4, name: "product 4", value:"product4" },
        { id: 5, name: "product 5", value:"product5" },
      ]
    },
    {
      key: "theme4",
      products: [
        { id: 1, name: "product 1", value:"product1" },
        { id: 2, name: "product 2", value:"product2" },
        { id: 3, name: "product 3", value:"product3" },
        { id: 4, name: "product 4", value:"product4" },
        { id: 5, name: "product 5", value:"product5" },
      ]
    },
    {
      key: "theme5",
      products: [
        { id: 1, name: "product 1", value:"product1" },
        { id: 2, name: "product 2", value:"product2" },
        { id: 3, name: "product 3", value:"product3" },
        { id: 4, name: "product 4", value:"product4" },
        { id: 5, name: "product 5", value:"product5" },
      ]
    },

  ],
  currentProducts:[]
};

const productReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        currentProducts: [...state.currentProducts, ...state.themes.filter(theme => theme.key === payload)[0].products]
      };

    default:
      return state;
  }
}

export default productReducer;