import React from "react";
import CarDetails from "./CarDetails";
import carsService from "../services/CarsService";

export default function CarsList({ cars, setCars}) {

  const handleDelete = async (id) => {
    let result = await carsService.delete(id);
    let carsUpdate = [];
    
    if(result)
    {
      carsUpdate = cars.filter((car) => car.id !== id)
      setCars(carsUpdate);
    }
    //console.log(result);
  }

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
            <CarDetails key={car.id} car={car} handleDelete={handleDelete}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
