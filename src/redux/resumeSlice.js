
const initialState = {
  currentPage: 0,

  profile: {
    fname: "",
    lname: "",
    phone: "",
    address: "",
    url: "",
  },

  education: [],

  skills: [],

  projects: [],

  social: [],
};

const resumeReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_PAGE":
      return {
        ...state,
        currentPage: action.payload,
      };

    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: {
          ...state.profile,
          [action.payload.name]: action.payload.value,
        },
      };

    case "ADD_EDUCATION":
      return {
        ...state,
        education: [
          ...state.education,
          action.payload,
        ],
      };

    case "UPDATE_EDUCATION":
      return {
        ...state,
        education: state.education.map((item) =>
          item.id === action.payload.id
            ? action.payload
            : item
        ),
      };

    case "DELETE_EDUCATION":
      return {
        ...state,
        education: state.education.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "ADD_SKILL":
      return {
        ...state,
        skills: [
          ...state.skills,
          action.payload,
        ],
      };

    case "UPDATE_SKILL":
      return {
        ...state,
        skills: state.skills.map((item) =>
          item.id === action.payload.id
            ? action.payload
            : item
        ),
      };

    case "DELETE_SKILL":
      return {
        ...state,
        skills: state.skills.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "ADD_PROJECT":
      return {
        ...state,
        projects: [
          ...state.projects,
          action.payload,
        ],
      };

    case "UPDATE_PROJECT":
      return {
        ...state,
        projects: state.projects.map((item) =>
          item.id === action.payload.id
            ? action.payload
            : item
        ),
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        projects: state.projects.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "ADD_SOCIAL":
      return {
        ...state,
        social: [
          ...state.social,
          action.payload,
        ],
      };

    case "UPDATE_SOCIAL":
      return {
        ...state,
        social: state.social.map((item) =>
          item.id === action.payload.id
            ? action.payload
            : item
        ),
      };

    case "DELETE_SOCIAL":
      return {
        ...state,
        social: state.social.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "LOAD_RESUME":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default resumeReducer;