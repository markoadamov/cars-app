import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCars, setDeselectedCar } from "../store/cars/slice";
import { selectedCarsSelector } from "../store/cars/selectors";

export default function CarRow({ car, handleDelete }) {
  let history = useHistory();
  const dispatch = useDispatch();
  const selectedCars = useSelector(selectedCarsSelector);

  function handleChange(event) {
    if (event.target.checked) {
      handleSelect();
    } else {
      handleDeselect();
    }
  }

  const handleSelect = () => {
    dispatch(setSelectedCars(car.id));
  };

  function handleDeselect() {
    dispatch(setDeselectedCar(car.id));
  }

  return (
    <tr>
      <td>
        <Link to={`cars/${car.id}`}>Read More</Link>
      </td>
      <td>{car.id}</td>
      <td>{car.brand}</td>
      <td>{car.model}</td>
      <td>{car.engine}</td>
      <td>{car.is_automatic ? "Yes" : "No"}</td>
      <td>{car.max_speed}</td>
      <td>{car.number_of_doors}</td>
      <td>{car.year}</td>
      <td>
        <input
          type="checkbox"
          onChange={handleChange}
          checked={selectedCars.includes(car.id)}
        />
      </td>
      <td onClick={() => history.push(`/edit/${car.id}`)}>
        <button className="EditButton">Edit</button>
      </td>
      <td onClick={() => handleDelete(car.id)}>
        <button className="DeleteButton">Delete</button>
      </td>
    </tr>
  );
}
