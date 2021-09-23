import { GET_THEME_FIELD } from "../Actions/types";

const initialState = {
  fields:[
    { id: 1, name: "Alle", value: "alle" },
    { id: 2, name: "Altersvorsorge", value: "altersvorsorge" },
    { id: 3, name: "Baufinanzierungsschutz", value: "baufinanzierungsschutz" },
    {
      id: 4,
      name: "Betriebliche Altersvorsorge",
      value: "betrieblicheAltervorsorge"
    },
    { id: 5, name: "Einkommenabsicherung", value: "einkommenabsicherung" },
    { id: 6, name: "Pflegeabsicherung", value: "pflegeabsicherung" },
    { id: 7, name: "Sach-Firmenschutz", value: "sachFirmenschutz" },
    {
      id: 8,
      name: "Sach-Kraftfahrtversicherung",
      value: "kraftFahrtversicherung"
    },
    { id: 9, name: "Sach-Privatschutz", value: "sachPrivatschutz" }
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