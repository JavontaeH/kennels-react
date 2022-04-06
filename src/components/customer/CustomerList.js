import React, { useState, useEffect } from "react";
//import the components we will need
import { CustomerCard } from "./CustomerCard";
import { getAllCustomers } from "../../modules/DataManager";

export const CustomerList = () => {
  // The initial state is an empty array
  const [customers, setCustomers] = useState([]);

  const getCustomers = () => {
    // After the data comes back from the API, we
    // use the setCustomers function to update state
    return getAllCustomers().then((customersFromAPI) => {
      setCustomers(customersFromAPI);
    });
  };

  // got the Customers from the API on the component's first render
  useEffect(() => {
    getCustomers();
  }, []);

  // Finally we use .map() to "loop over" the Customers array to show a list of Customer cards
  return (
    <div className="container-cards">
      {customers.map((customer) => (
        <CustomerCard customer={customer} key={customer.id} />
      ))}
    </div>
  );
};
