import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnBoarding from "../pages/onboarding/OnBoarding.pages";
import Login from "../modules/auth/login/Login.modules";

const RouterPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default RouterPage;