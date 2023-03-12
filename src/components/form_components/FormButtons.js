import React from 'react'
import { useHistory } from 'react-router-dom';
import carsService from '../../services/CarsService';

export default function FormButtons({defaulFormState, id, newCar, setNewCar}) {

    let history = useHistory();

    const handleAddCar = () => {
      carsService.add(newCar, () => {
        history.push("/cars");
      });
    };
  
    const handleEditCar = () => {
      carsService.edit(id, newCar, () => {
        history.push("/cars");
      });
    };
  
    const handleReset = () => {
      setNewCar(defaulFormState);
    };
  
    const handlePreview = () => {
      alert(
        `Brand: ${newCar.brand}\nModel: ${newCar.model}\nYear: ${newCar.year}\nMax Speed: ${newCar.maxSpeed}\nNumber Of Doors: ${newCar.numberOfDoors}\nAutomatic: ${newCar.isAutomatic}\nEngine: ${newCar.engine}`
      );
    };

  return (
    <div>
      <button
        className="FormButton"
        onClick={id ? handleEditCar : handleAddCar}
      >
        Submit
      </button>
      <button className="FormButton" type="reset" onClick={handleReset}>
        Reset
      </button>
      <button className="FormButton" onClick={handlePreview}>
        Preview
      </button>
    </div>
  )
}
