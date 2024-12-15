import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OnBoarding from "../pages/onboarding/OnBoarding.pages";
import Login from "../modules/auth/login/Login.modules";
import ForGotPassWord from "../modules/auth/forgotpassword/ForGotPassWord.modules";
import Home from "../pages/home/Home";
import ProductPage from "../widget/product page/ProductPage";

const RouterPage: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot-password" element={<ForGotPassWord />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default RouterPage;
