import axios from "./Axio";
function ApiServer(email, password, name, role, img) {
  const form = new FormData();
  form.append("email", email);
  form.append("password", password);
  form.append("username", name);
  form.append("role", role);
  form.append("userImage", img);

  return axios.post(`api/v1/participant`, form);
}
function Themquizz(description, name, difficulty, quizImage) {
  const form = new FormData();
  form.append("description", description);
  form.append("difficulty", difficulty);
  form.append("name", name);
  form.append("quizImage", quizImage);

  return axios.post(`api/v1/quiz`, form);
}
function Updateuser(id, name, role, img) {
  const form = new FormData();
  form.append("username", name);
  form.append("id", id);
  form.append("role", role);
  form.append("userImage", img);
  return axios.put(`api/v1/participant`, form);
}
function Updatequiz(id, name, description, difficulty, quizImage) {
  const form = new FormData();
  form.append("name", name);
  form.append("id", id);
  form.append("description", description);
  form.append("difficulty", difficulty);
  form.append("quizImage", quizImage);
  return axios.put(`api/v1/quiz`, form);
}
function addquestion(quiz_id, description, questionImage) {
  const form = new FormData();
  form.append("quiz_id", quiz_id);
  form.append("description", description);
  form.append("questionImage", questionImage);

  return axios.post(`api/v1/question`, form);
}
const getAlluser = () => {
  return axios.get(`api/v1/participant/all`);
};
const Deleteuser = (userid) => {
  return axios.delete(`api/v1/participant`, { data: { id: userid } });
};
const Deletequizz = (quizzid) => {
  return axios.delete(`api/v1/quiz/${quizzid}`);
};
const Phantrang = (page, limit) => {
  return axios.get(`api/v1/participant?page=${page}&limit=${limit}`);
};
const Login = (email, password) => {
  return axios.post(`api/v1/login`, { email, password, delay: 2000 });
};
const Dangky = (email, password, username) => {
  return axios.post(`api/v1/register`, { email, password, username });
};

const Getquizz = () => {
  return axios.get(`api/v1/quiz-by-participant`);
};
const Histor = () => {
  return axios.get(`api/v1/history`);
};
const Getquizzid = (id) => {
  return axios.get(`api/v1/questions-by-quiz?quizId=${id}`);
};
const Getanswer = (id) => {
  return axios.get(`api/v1/quiz-with-qa/${id}`);
};
const quizzsubmit = (data) => {
  return axios.post("api/v1/quiz-submit", { ...data, delay: 2000 });
};
const profile = (username, userImage) => {
  return axios.post("api/v1/profile", { username, userImage });
};
const quizzupdate = (data) => {
  return axios.post("api/v1/quiz-upsert-qa", { ...data });
};
const postQuizz = (quizId, userId) => {
  return axios.post("api/v1/quiz-assign-to-user", { quizId, userId });
};
const Logout = (email, refresh_token) => {
  return axios.post("api/v1/logout", { email, refresh_token });
};
const getcauhoi = () => {
  return axios.get("api/v1/quiz/all");
};
const GetDashboard = () => {
  return axios.get("api/v1/overview");
};
const Xoacauhoi = (id) => {
  return axios.delete(`api/v1/answer/${id}`);
};
const Deletequestion = (id, quizId) => {
  return axios.delete(`api/v1/question`, {
    data: {
      id: id,
      quizId: quizId,
    },
  });
};

const Addanswer = (description, correct_answer, question_id) => {
  console.log(description, correct_answer, question_id);
  return axios.post(`api/v1/answer`, {
    description,
    correct_answer,
    question_id,
  });
};
export {
  ApiServer,
  getAlluser,
  Updateuser,
  Deleteuser,
  Phantrang,
  Login,
  Dangky,
  Getquizz,
  Getquizzid,
  quizzsubmit,
  getcauhoi,
  Themquizz,
  Deletequizz,
  Updatequiz,
  Getanswer,
  Xoacauhoi,
  Addanswer,
  addquestion,
  postQuizz,
  Deletequestion,
  quizzupdate,
  Logout,
  profile,
  Histor,
  GetDashboard,
};
