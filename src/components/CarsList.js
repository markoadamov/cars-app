import React from "react";
import CarDetails from "./CarDetails";

export default function CarsList({ cars }) {
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
            <CarDetails key={car.id} car={car} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
