import "./LocationDetail.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteLocations, getLocationById } from "../../modules/DataManager";

export const LocationDetail = () => {
  const [location, setLocation] = useState({ name: "", address: "" });
  const [isLoading, setIsLoading] = useState(true);

  const { locationId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getLocationById(locationId).then((location) => {
      setLocation({
        name: location.name,
        address: location.address,
      });
      setIsLoading(false);
    });
  }, [locationId]);

  const handleDelete = () => {
    setIsLoading(true);
    deleteLocations(locationId).then(() => {
      navigate("/locations");
    });
  };

  return (
    <section className="location">
      <h3 className="location__name">{location.name}</h3>
      <div className="location__address">{location.address}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
        Demolish
      </button>
    </section>
  );
};
