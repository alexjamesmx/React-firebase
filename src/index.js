import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginView from "./routes/loginView";
import DashboardView from "./routes/dashboardView";
import EditProfileView from "./routes/editProfileView";
import SignOutView from "./routes/signOutView";
import PublicProfileView from "./routes/publicProfileView";
import ChooseUsernameView from "./routes/chooseUsername";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LoginView />} />
      <Route path="dashboard" element={<DashboardView />} />
      <Route path="dashboard/profile" element={<EditProfileView />} />
      <Route path="signout" element={<SignOutView />} />
      <Route path="u/:username" element={<PublicProfileView />} />
      <Route path="choose-username" element={<ChooseUsernameView />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
