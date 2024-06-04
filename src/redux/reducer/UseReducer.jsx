import { INCREMENT, DECREMENT } from "../action/counterAction";
import { Fetch, quiz, Logouts, Pros } from "../action/useAction";
const INITIAL_STATE = {
  user: {
    access_token: "",
    refresh_token: "",
    username: "",
    img: "",
    role: "",
    email: "",
    nameupdate: "",
  },
  isAuthenticated: false,
  quizResult: null,
};

const useReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case Fetch:
    case "PROS":
      return {
        ...state,
        user: {
          access_token:
            action.payload?.data?.DT?.access_token || state.user.access_token,
          refresh_token:
            action.payload?.data?.DT?.refresh_token || state.user.refresh_token,
          username: action.payload?.data?.DT?.username || state.user.username,
          img: action.payload?.data?.DT?.image || state.user.img,
          role: action.payload?.data?.DT?.role || state.user.role,
          email: action.payload?.data?.DT?.email || state.user.email,
          nameupdate: action.payloads?.data?.DT?.username,
        },
        isAuthenticated: true,
      };

    case quiz:
      return {
        ...state,
        quizResult: action.payload,
      };
    case Logouts:
      return {
        ...state,
        user: {
          access_token: "",
          refresh_token: "",
          username: "",
          img: "",
          role: "",
          email: "",
        },
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default useReducer;
