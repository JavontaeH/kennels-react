import React from "react";
import { PropsAndState } from "../propsAndState/PropsAndState";
import { Checkbox } from "../propsAndState/Checkbox";

const getUsername = () => {
  return JSON.parse(sessionStorage.getItem("kennel_customer"));
};

export const Home = () => (
  <>
    <h2>Nashville Kennels</h2>
    <small>Loving care when you're not there.</small>

    <address>
      <div>Visit Us at the Nashville North Location</div>
      <div>500 Puppy Way</div>
    </address>
    <PropsAndState yourName={getUsername()?.name} />
    <Checkbox />
  </>
);
