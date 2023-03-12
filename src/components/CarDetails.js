import React from "react";
import { useHistory } from "react-router-dom";

export default function CarDetails({ car, handleDelete }) {
  let history = useHistory();

  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.engine}</td>
      <td>{car.isAutomatic ? "Yes" : "No"}</td>
      <td>{car.maxSpeed}</td>
      <td>{car.numberOfDoors}</td>
      <td>{car.year}</td>
      <td onClick={() => history.push(`/edit/${car.id}`)}>
        <button className="EditButton">Edit</button>
      </td>
      <td onClick={() => handleDelete(car.id)}>
        <button className="DeleteButton">Delete</button>
      </td>
    </tr>
  );
}
