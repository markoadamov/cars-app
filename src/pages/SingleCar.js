import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import carsService from "../services/CarsService";

export default function SingleCar() {
  const [car, setCar] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    handleGetCar();
  }, []);

  const handleGetCar = async () => {
    const response = await carsService.get(id);
    setCar(response.data);
  };

  return (
    <div className="SingleCarDiv">
      <h2>There's nothing to read more... <br/> This is all:</h2>
      <p>ID: {car.id}</p>
      <p>BRAND: {car.brand}</p>
      <p>MODEL: {car.model}</p>
      <p>ENGINE TYPE: {car.engine}</p>
      <p>AUTOMATIC: {car.is_automatic ? "Yes" : "No"}</p>
      <p>SPEED: {car.max_speed}</p>
      <p>NUMBER OF DOORS: {car.number_of_doors}</p>
      <p>PRODUCTION YEAR: {car.year}</p>
    </div>
  );
}
