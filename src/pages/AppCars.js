import React, { useEffect, useState } from "react";
import carsService from "../services/CarsService";
import CarsList from "../components/CarsList";

export default function AppCars() {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    handleGetPosts();
  }, []);

  const handleGetPosts = async () => {
    const response = await carsService.getAll();
    console.log("Response:", response);
    setCars(response.data);
  };

  return (
    <CarsList cars={cars}/>
  );
}
