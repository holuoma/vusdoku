import { GET_PRODUCTS } from "../Actions/types";

const initialState = {
  themes: [
    {
      key: "alle",
      products: [
        { id: 1, name: "5 Sterne AnsparRente", value: "5SterneAnsparRente" },
        { id: 2, name: "5 Sterne SofortRente", value: "5SterneSofortRente" },
        { id: 3, name: "BasisRente invest", value: "basisRenteInvest" },
        { id: 4, name: "BaufiSchutz 2.0", value: "baufischutz2.0" },
        {
          id: 5,
          name: "bAV 5 Sterne AnsparRente (Direktversicherung)",
          value: "bav5SterneAnsparRenteDirektversicherung"
        },
        {
          id: 6,
          name: "bAV 5 Sterne AnsparRente (Pensionszusage)",
          value: "bav5SterneAnsparRentePensionszusage"
        },
        {
          id: 7,
          name: "bAV 5 Sterne AnsparRente (Unterstützungskasse)",
          value: "bav5SterneAnsparRenteUnterstuetzungskasse"
        },
        {
          id: 8,
          name: "bAV VarioInvest Rente (Direktversicherung)",
          value: "bavVarioInvestRenteDirektversicherung"
        },
        {
          id: 9,
          name: "bAV VarioInvest Rente (Pensionszusage)",
          value: "bavVarioInvestRentePensionszusage"
        },
        {
          id: 10,
          name: "bAV VarioInvest Rente (Unterstützungskasse)",
          value: "bavVarioInvestRenteUnterstuetzungskasse"
        },
        {
          id: 11,
          name: "bAV-Förderung für Geringverdiener",
          value: "bavFoerderungFuerGeringverdiener"
        }
      ]
    },
    {
      key: "altersvorsorge",
      products: [
        { id: 1, name: "5 Sterne AnsparRente", value: "5SterneAnsparRente" },
        { id: 2, name: "5 Sterne SofortRente", value: "5SterneSofortRente" },
        { id: 3, name: "BasisRente invest", value: "basisRenteInvest" },
        { id: 4, name: "FondsRente", value: "fondsRente" },
        { id: 5, name: "JuniorInvest", value: "juniorInvest" }
      ]
    },
    {
      key: "baufinanzierungsschutz",
      products: [
        { id: 1, name: "Baufischutz 2.0", value: "baufischutz2.0" },
        { id: 2, name: "Produktübergreifend", value: "produktuebergreifend" }
      ]
    },
    {
      key: "einkommenabsicherung",
      products: [
        { id: 1, name: "BerufsKasko", value: "berufsKasko" },
        { id: 2, name: "ErwerbsKasko", value: "erwerbsKasko" }
      ]
    },
    {
      key: "pflegeabsicherung",
      products: [
        { id: 1, name: "PflegeRente", value: "pflegeRente" },
        { id: 2, name: "Produktübergreifend", value: "produktuebergreifend" }
      ]
    }
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