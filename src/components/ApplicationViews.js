import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
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
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />
        <Route exact path="/register" element={<Register />} />
        {/* Render the home page */}
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />

        {/* Render the list when http://localhost:3000/(list) is chosen */}

        <Route
          exact
          path="/animals"
          element={
            <PrivateRoute>
              <AnimalList />
            </PrivateRoute>
          }
        />
        <Route
          path="/animals/:animalId"
          element={
            <PrivateRoute>
              <AnimalDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/animals/create"
          element={
            <PrivateRoute>
              <AnimalForm />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/locations"
          element={
            <PrivateRoute>
              <LocationList />
            </PrivateRoute>
          }
        />
        <Route
          path="/locations/:locationId"
          element={
            <PrivateRoute>
              <LocationDetail />
            </PrivateRoute>
          }
        />
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <CustomerList />
            </PrivateRoute>
          }
        />
        <Route
          path="/employees"
          element={
            <PrivateRoute>
              <EmployeeList />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
