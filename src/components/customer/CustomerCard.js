import React from "react";
import "./Customer.css";

export const CustomerCard = ({ customer, handleDeleteCustomers }) => (
  <div className="card">
    <div className="card-content">
      <picture></picture>
      <h3>
        Name: <span className="card-customername">{customer.name}</span>
      </h3>
      <p>Address: {customer.address}</p>
      <button type="button" onClick={() => handleDeleteCustomers(customer.id)}>
        Release
      </button>
    </div>
  </div>
);
