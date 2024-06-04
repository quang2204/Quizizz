import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "./component/user/Quizz.css";
import "../node_modules/nprogress/nprogress.css";
import Home from "./component/user/Index.jsx";
import User from "./component/Admin/Conten/User.jsx";
import { store, persistor } from "../src/redux/store.jsx";
import { Provider } from "react-redux";
import QuizManagement from "./component/Admin/Conten/QuizManagement.jsx"; //

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Playground } from "./storybook/Playground.tsx";
import Dangnhap from "./component/user/Dangnhap.jsx";
import Dangkys from "./component/user/Dangky.jsx";
import Quizz from "./component/user/Quizz.jsx";
import { PersistGate } from "redux-persist/integration/react";
import Quizzz from "./component/user/Quizzz.jsx";
import Hearder from "./component/Header/Hearder.jsx";
import Errors from "./component/Error";
import Detail_quizz from "./component/user/Detail_quizz";
import Summary from "./component/user/Summary";
import Questions from "./component/Admin/Conten/Question";
import Addbaibai from "./component/Admin/Ansewn/Addbai";
import Updateansewn from "./component/Admin/Ansewn/Update";
import Router from "./component/Router/Router";
import Routeradmin from "./component/Router/Routeradmin";
import Profile from "./component/user/Profile";
import History from "./component/user/History";
import Dashboard from "./component/Admin/Conten/Dashboard.jsx";
// import Admin from "./component/Admin/Admin.jsx";
const Error = () => {
  return <Errors></Errors>;
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hearder />}>
            <Route index element={<Home />} />
            <Route path="dist/index.html" element={<Home />} />
            <Route path="dangnhap" element={<Dangnhap />} />
            <Route path="dangky" element={<Dangkys />} />
            <Route
              path="history"
              element={
                <Router>
                  <History />
                </Router>
              }
            />
            <Route
              path="quizz"
              element={
                <Router>
                  <Quizz />
                </Router>
              }
            />
            <Route
              path="quizz/:id"
              element={
                <Router>
                  <Quizzz />
                </Router>
              }
            />
            <Route
              path="profile"
              element={
                <Router>
                  <Profile />
                </Router>
              }
            />
          </Route>

          <Route
            path="detail/:id"
            element={
              <Router>
                <Detail_quizz />
              </Router>
            }
          />
          <Route
            path="admin/question/:id"
            element={
              <Router>
                <Questions />
              </Router>
            }
          />
          <Route path="admin/addbai/:id" element={<Addbaibai />} />
          <Route
            path="admin/updateansewn"
            element={
              <Router>
                <Updateansewn />
              </Router>
            }
          />
          <Route
            path="summary/:id"
            element={
              <Router>
                <Summary />
              </Router>
            }
          />
          <Route
            path="/admin"
            element={
              <Routeradmin>
                <Playground />
              </Routeradmin>
            }
          >
            <Route index element={<Dashboard />} />

            <Route path="quan-ly-user" element={<User />} />
            <Route path="quan-ly-quiz" element={<QuizManagement />} />
          </Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Playground></Playground> */}
      {/* </React.StrictMode> */}
    </PersistGate>
  </Provider>
);
