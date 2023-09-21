import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Dashboard from "./Pages/Dashboard";
import AuthLayout from "./Components/Auth/AuthLayout";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

const routerAdmin = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AuthLayout />}>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      </Route>

      <Route path="/" element={<Dashboard />}></Route>
    </Route>
  )
);

const RouterCom = () => {
  return (
    <div>
      <RouterProvider router={routerAdmin} />
    </div>
  );
};

export default RouterCom;
