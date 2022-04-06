const remoteURL = "http://localhost:8088";

export const getAnimalById = (animalId) => {
  //be sure your animals have good data and related to a location and customer
  return fetch(
    `${remoteURL}/animals/${animalId}?_expand=location&_expand=customer`
  ).then((res) => res.json());
};

export const getAllAnimals = () => {
  return fetch(`${remoteURL}/animals`).then((res) => res.json());
};

export const getAllCustomers = () => {
  return fetch(`${remoteURL}/customers`).then((res) => res.json());
};

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/Employees`).then((res) => res.json());
};

export const getAllLocations = () => {
  return fetch(`${remoteURL}/Locations`).then((res) => res.json());
};
