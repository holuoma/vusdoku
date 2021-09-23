// import undoable from "redux-undo";
import { GET_DOCUMENTS, GET_RESULT, GET_FILTERED_DOCS } from "../Actions/types";
const timeElapsed = Date.now();
const today = new Date(timeElapsed);

// let randLetter =  Math.floor(Math.random() * 26);
// let uniqid = randLetter + Date.now();

const initialState = {
  products: [
    {
      key: "5SterneAnsparRente",
      docs: [
        { id: 1, value: "alle", name: "Alle" },
        { id: 2, value: "antraegeUndFormulare", name: "Anträge und Formulare" },
        { id: 3, value: "beraterunterlagen", name: "Beraterunterlagen" },
        { id: 4, value: "kundenunterlagen", name: "Kundenunterlagen" },
        {
          id: 5,
          value: "produktinformationenUndbedingungen",
          name: "Produktinformationen und Bedingungen"
        }
      ]
    },
    {
      key: "5SterneSofortRente",
      docs: [
        { id: 1, value: "alle", name: "Alle" },
        { id: 2, value: "antraegeUndFormulare", name: "Anträge und Formulare" },
        { id: 3, value: "beraterunterlagen", name: "Beraterunterlagen" },
        { id: 4, value: "kundenunterlagen", name: "Kundenunterlagen" },
        {
          id: 5,
          value: "produktinformationenUndbedingungen",
          name: "Produktinformationen und Bedingungen"
        }
      ]
    },
    {
      key: "basisRenteInvest",
      docs: [
        { id: 1, value: "alle", name: "Alle" },
        { id: 2, value: "antraegeUndFormulare", name: "Anträge und Formulare" },
        { id: 3, value: "beraterunterlagen", name: "Beraterunterlagen" },
        { id: 4, value: "kundenunterlagen", name: "Kundenunterlagen" },
        {
          id: 5,
          value: "produktinformationenUndbedingungen",
          name: "Produktinformationen und Bedingungen"
        }
      ]
    },
    {
      key: "fondsrente",
      docs: [
        { id: 1, value: "alle", name: "Alle" },
        { id: 2, value: "antraegeUndFormulare", name: "Anträge und Formulare" },
        { id: 3, value: "beraterunterlagen", name: "Beraterunterlagen" },
        { id: 4, value: "kundenunterlagen", name: "Kundenunterlagen" },
        {
          id: 5,
          value: "produktinformationenUndbedingungen",
          name: "Produktinformationen und Bedingungen"
        }
      ]
    },
    {
      key: "pflegeRente",
      docs: [
        { id: 1, value: "alle", name: "Alle" },
        { id: 2, value: "antraegeUndFormulare", name: "Anträge und Formulare" },
        { id: 3, value: "beraterunterlagen", name: "Beraterunterlagen" },
        { id: 4, value: "kundenunterlagen", name: "Kundenunterlagen" },
        {
          id: 5,
          value: "produktinformationenUndbedingungen",
          name: "Produktinformationen und Bedingungen"
        }
      ]
    },
    {
      key: "produktuebergreifend",
      docs: [
        { id: 1, value: "alle", name: "Alle" },
        { id: 2, value: "antraegeUndFormulare", name: "Anträge und Formulare" },
        { id: 3, value: "beraterunterlagen", name: "Beraterunterlagen" },
        { id: 4, value: "kundenunterlagen", name: "Kundenunterlagen" },
        {
          id: 5,
          value: "produktinformationenUndbedingungen",
          name: "Produktinformationen und Bedingungen"
        }
      ]
    }
  ],
  resultDocs: [
    {
      key: "antraegeUndFormulare",
      docs: [
        {
          key: 1,
          value: "antragAufVNWechsel",
          name: "Antrag auf VN-Wechsel",
          date: "07/2021",
          orderNumber: Math.floor(Math.random() * 789),
          download: ""
        },
        {
          key: 2,
          value: "antragAufZuzahlung",
          name: "Antrag auf Zuzahlung",
          date: "01/2019",
          orderNumber: Math.floor(Math.random() * 789),
          download: ""
        },
        {
          key: 3,
          value: "antragAufBezugsberichtigung",
          name: "Antrag auf Bezugsberechtigung",
          date: "07/2021",
          orderNumber: "",
          text: ""
        },
        {
          key: 4,
          value: "zusatzvereinbarungVnWechselAufVolljaehrigeVp",
          name: "Zusatzvereinbarung VN Wechsel auf volljährige VP",
          date: "01/2020",
          orderNumber: Math.floor(Math.random() * 650),
          download: ""
        },
        {
          key: 5,
          value: "eklaerungVnGemeinsam",
          name: "Erklärung VN gemeinsam",
          date: "01/2020",
          orderNumber: Math.floor(Math.random() * 559),
          download: ""
        }
      ]
    },
    {
      key: "beraterunterlagen",
      docs: [
        {
          key: 1,
          value: "beitragstabellePP11",
          name: "Beitragstabelle PP11",
          date: "07/2021",
          orderNumber: Math.floor(Math.random() * 789),
          download: ""
        },
        {
          key: 2,
          value: "varioInvestBeraterpraesentation",
          name: "VarioInvest - Beraterpräsentation",
          date: "01/2019",
          orderNumber: Math.floor(Math.random() * 789),
          download: ""
        },
        {
          key: 3,
          value: "direktversicherungArbeitnehmerinformation",
          name: "Direktversicherung - Arbeitnehmerinformation",
          date: "07/2021",
          orderNumber: "",
          text: ""
        },
        {
          key: 4,
          value: "konsortialrenteBeraterpräsentation",
          name: "Konsortialrente - Beraterpräsentation",
          date: "01/2020",
          orderNumber: Math.floor(Math.random() * 650),
          download: ""
        },
        {
          key: 5,
          value: "faqPensionsfonds",
          name: "FAQ Pensionsfonds",
          date: "01/2020",
          orderNumber: Math.floor(Math.random() * 559),
          download: ""
        }
      ]
    },
    {
      key: "kundenunterlagen",
      docs: [
        {
          key: 1,
          value: "onepagerMinijob",
          name: "Onepager Minijob Arbeitgeber",
          date: "07/2021",
          orderNumber: Math.floor(Math.random() * 789),
          download: ""
        },
        {
          key: 2,
          value: "flyerBetriebsrentenManager",
          name: "Flyer Betriebsrenten-Manager",
          date: "01/2019",
          orderNumber: Math.floor(Math.random() * 789),
          download: ""
        },
        {
          key: 3,
          value: "beratungsunterlageGgfversorgung",
          name: "Beratungsunterlage GGF Versorgung",
          date: "07/2021",
          orderNumber: "",
          text: ""
        },
        {
          key: 4,
          value: "zusatzvereinbarungVnWechselAufVolljaehrigeVp",
          name: "Zusatzvereinbarung VN Wechsel auf volljährige VP",
          date: "01/2020",
          orderNumber: Math.floor(Math.random() * 650),
          download: ""
        },
        {
          key: 5,
          value: "eklaerungVnGemeinsam",
          name: "Erklärung VN gemeinsam",
          date: "01/2020",
          orderNumber: Math.floor(Math.random() * 559),
          download: ""
        }
      ]
    }
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
