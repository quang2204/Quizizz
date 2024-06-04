export const Fetch = "Fetch_user_Login";
export const Logouts = "Logouts";
export const Profiles = "Profiles";
export const doLogin = (res) => {
  return {
    type: Fetch,
    payload: res,
  };
};
export const Pros = (res) => {
  return {
    type: "Profiles",
    payload: res,
  };
};
export const quiz = "quizz";

export const submitQuiz = (payload) => {
  return {
    type: quiz,
    payload: payload,
  };
};
export const dologout = () => {
  return {
    type: Logouts,
  };
};
