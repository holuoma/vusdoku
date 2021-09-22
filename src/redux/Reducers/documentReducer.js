// import undoable from "redux-undo";
import { GET_DOCUMENTS, GET_RESULT, GET_FILTERED_DOCS } from "../Actions/types";
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

// let randLetter =  Math.floor(Math.random() * 26);
// let uniqid = randLetter + Date.now();

const initialState = {
  products: [
    {
      key: "product1",
      docs: [
        { id: 1,value:"document1", name: "document1" },
        { id: 2,value:"document1", name: "document2" },
        { id: 3,value:"document1", name: "document3" },
        { id: 4,value:"document1", name: "document4" },
        { id: 5,value:"document1", name: "document5" },
      ]
    },
    {
      key: "product2",
      docs: [
        { id: 1,value:"document1", name: "document1" },
        { id: 2,value:"document1", name: "document2" },
        { id: 3,value:"document1", name: "document3" },
        { id: 4,value:"document1", name: "document4" },
        { id: 5,value:"document1", name: "document5" },
      ]
    },
    {
      key: "product3",
      docs: [
        { id: 1,value:"document1", name: "document1" },
        { id: 2,value:"document1", name: "document2" },
        { id: 3,value:"document1", name: "document3" },
        { id: 4,value:"document1", name: "document4" },
        { id: 5,value:"document1", name: "document5" },
      ]
    },
    {
      key: "product4",
      docs: [
        { id: 1,value:"document1", name: "document1" },
        { id: 2,value:"document1", name: "document2" },
        { id: 3,value:"document1", name: "document3" },
        { id: 4,value:"document1", name: "document4" },
        { id: 5,value:"document1", name: "document5" },
      ]
    },

  ],
  resultDocs: [
    {
      key: "document1",
      docs: [
        { key: 1, value:"document1", name: "document",date:"9/21/2020", orderNumber:Math.floor(Math.random() * 26),  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 2, value:"document2", name: "bocument",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26),  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 3, value:"document3", name: "document3",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26),  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 4, value:"document4", name: "document4",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26),  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 5, value:"document5", name: "document5",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26),  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      ]
    },
    {
      key: "document2",
      docs: [
        { key: 1, value:"document1", name: "document1",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 2, value:"document2", name: "document2",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 3, value:"document3", name: "document3",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 4, value:"document4", name: "document4",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 5, value:"document5", name: "document5",date:today.toLocaleDateString(), orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      ]
    },
    {
      key: "document3",
      docs: [
        { key: 1, value:"document1", name: "document1",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 2, value:"document2", name: "document2",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 3, value:"document3", name: "document3",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 4, value:"document4", name: "document4",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 5, value:"document5", name: "document5",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      ]
    },
    {
      key: "document4",
      docs: [
        { key: 1, value:"document1", name: "document1",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 2, value:"document2", name: "document2",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 3, value:"document3", name: "document3",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 4, value:"document4", name: "document4",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 5, value:"document5", name: "document5",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      ]
    },
    {
      key: "document5",
      docs: [
        { key: 1, value:"document1", name: "document1",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 2, value:"document2", name: "document2",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { key: 3, value:"document3", name: "document3",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 4, value:"document4", name: "document4",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { key: 5, value:"document5", name: "document5",date:today.toLocaleDateString(),orderNumber:Math.floor(Math.random() * 26), text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
      ]
    },
    

  ],
  currentDocuments:[],
  result:[],
  filteredDocuments:[]
};

const documentReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {

    case GET_DOCUMENTS:
      return {
        ...state,
        currentDocuments: [ ...state.currentDocuments, ...state.products.filter(product => product.key === payload)[0].docs]
      };
    case GET_RESULT:
      return {
        ...state,
        result: [...state.result, ...state.resultDocs.filter(doc => doc.key === payload)[0].docs]
      };

      // const filteredDocuments = details.filter(
      //   document => {
      //     return (
      //       document
      //       .name
      //       .toLowerCase()
      //       .includes(searchField.toLowerCase())
      //     );
      //   }
      // );
      case GET_FILTERED_DOCS:
      return {
        ...state,
        filteredDocuments: state.result.filter(document => document.name.toLowerCase().includes(payload.toLowerCase()))
      };
  
    case "ERROR":
      return {
        ...state,
        err: payload,
      };
    default:
      return state;
  }
};

export default documentReducer;
