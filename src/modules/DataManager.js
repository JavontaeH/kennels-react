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

export const getLocationById = (locationId) => {
  return fetch(`${remoteURL}/locations/${locationId}`).then((res) =>
    res.json()
  );
};

export const deleteAnimal = (id) => {
  return fetch(`${remoteURL}/animals/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const deleteLocations = (id) => {
  return fetch(`${remoteURL}/locations/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const deleteEmployees = (id) => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const deleteCustomers = (id) => {
  return fetch(`${remoteURL}/customers/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const addAnimal = (newAnimal) => {
  return fetch(`${remoteURL}/animals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnimal),
  }).then((response) => response.json());
};
