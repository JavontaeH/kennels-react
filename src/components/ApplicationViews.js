import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { Home } from "./home/Home";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail";
import { AnimalForm } from "./animal/AnimalForm";
import { Register } from "./auth/Register";
import { Login } from "./auth/Login";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = () => {
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  };

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null);
  };
  return (
    <>
      <Routes>
        {/* render login paths */}
        <Route
          exact
          path="login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="register" element={<Register />} />
        <Route exact path="" element={<Home />} />
        <Route exact path="locations" element={<LocationList />} />
        {/* Render the home page if logged in else nav to login */}
        <Route path="/" element={<PrivateRoute />}>
          <Route exact path="animals" element={<AnimalList />} />
          <Route path="animals/:animalId" element={<AnimalDetail />} />
          <Route path="animals/create" element={<AnimalForm />} />
          <Route path="locations/:locationId" element={<LocationDetail />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="employees" element={<EmployeeList />} />
        </Route>
      </Routes>
    </>
  );
};
