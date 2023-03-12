import React from "react";
import CarDetails from "./CarDetails";
import carsService from "../services/CarsService";

export default function CarsList({ cars, setCars }) {

  const handleDelete = async (id) => {
    let carsUpdate = [];
    const decision = window.confirm("Are you sure you want to delete?");

    function updateFrontEnd(result) {
      if (result) {
        carsUpdate = cars.filter((car) => car.id !== id);
        setCars(carsUpdate);
      }
    }

    if (decision) {
      let result = await carsService.delete(id);
      updateFrontEnd(result);
    }
  };

  return (
    <div className="DivCarList">
      <table className="CarListTable">
        <thead>
          <tr>
            <th>Car ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Engine</th>
            <th>Automatic</th>
            <th>Max Speed</th>
            <th>Doors</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <CarDetails key={car.id} car={car} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
