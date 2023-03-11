import React from "react";

export default function CarDetails({ car }) {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.engine}</td>
      <td>{car.isAutomatic?'Yes':'No'}</td>
      <td>{car.maxSpeed}</td>
      <td>{car.numberOfDoors}</td>
      <td>{car.year}</td>
    </tr>
  );
}
