import React, { useState, useEffect } from "react";
import { PropsAndState } from "../propsAndState/PropsAndState";
import { Checkbox } from "../propsAndState/Checkbox";
import { getRandomId } from "../../modules/DataManager";
import { AnimalSpotlight } from "../animal/AnimalSpotlight";

const getUsername = () => {
  return JSON.parse(sessionStorage.getItem("kennel_customer"));
};

export const Home = () => {
  const [spotlightId, setSpotlightId] = useState(0);

  const refreshSpotlightAnimal = () => {
    getRandomId().then(setSpotlightId);
  };

  useEffect(() => {
    refreshSpotlightAnimal();
  }, []);

  return (
    <>
      <h2>Nashville Kennels</h2>
      <small>Loving care when you're not there.</small>

      <address>
        <div>Visit Us at the Nashville North Location</div>
        <div>500 Puppy Way</div>
      </address>
      <button onClick={refreshSpotlightAnimal}>Reload &#x27f3;</button>
      {spotlightId && <AnimalSpotlight animalId={spotlightId} />}
      <PropsAndState yourName={getUsername()?.name} />
      <Checkbox />
    </>
  );
};
