import React, { useState, useEffect } from "react";
//import the components we will need
import { AnimalCard } from "./AnimalCard";
import { getAllAnimals, getAnimalById } from "../../modules/DataManager";

export const AnimalList = () => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    // use the setAnimals function to update state
    return getAllAnimals().then((animalsFromAPI) => {
      setAnimals(animalsFromAPI);
    });
  };

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
      {animals.map((animal) => (
        <AnimalCard animal={animal} key={animal.id} />
      ))}
    </div>
  );
};