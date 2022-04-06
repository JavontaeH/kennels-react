import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerList } from "./customer/CustomerList";
import { LocationList } from "./location/LocationList";
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail";

export const ApplicationViews = () => {
  return (
    <>
      <Routes>
        {/* Render the home page */}
        <Route exact path="/" element={<Home />} />

        {/* Render the list when http://localhost:3000/(list) is chosen */}
        <Route exact path="/animals" element={<AnimalList />} />
        <Route path="/animals/:animalId" element={<AnimalDetail />} />
        <Route exact path="/locations" element={<LocationList />} />
        <Route path="/locations/:locationId" element={<LocationDetail />} />
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </>
  );
};
