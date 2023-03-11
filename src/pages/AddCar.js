import React, { useState } from "react";
import carsService from "../services/CarsService";

export default function AddCar() {
  let defaulFormState = {
    brand: "",
    model: "",
    year: "",
    maxSpeed: 0,
    numberOfDoors: 4,
    isAutomatic: false,
    engine: "",
  };

  const [newCar, setNewCar] = useState(defaulFormState);

  let years_list = Array.from({ length: 29 }, (_, i) => 1990+i);

  const handleSubmitCar = () => {
    carsService.Add(newCar);
  };

  const handleReset = () => {
    setNewCar(defaulFormState);
  };

  function assignSelectedYear(e) {
    setNewCar({ ...newCar, year: Number(e.target.value) });
  }

  return (
    <div className="AddCar">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>Add Car:</label>
        <br />
        <input
          placeholder="Brand"
          type="text"
          value={newCar.brand}
          onChange={(e) => {
            setNewCar({ ...newCar, brand: e.target.value });
          }}
        />
        <br />
        <input
          placeholder="Model"
          type="text"
          value={newCar.model}
          onChange={(e) => {
            setNewCar({ ...newCar, model: e.target.value });
          }}
        />
        <br />
        <br />
        <label>Max Speed:</label>
        <br />
        <input
          type="number"
          value={newCar.maxSpeed}
          onChange={(e) => {
            setNewCar({ ...newCar, maxSpeed: Number(e.target.value) });
          }}
        />
        <br />
        <br />
        <label>Number of Doors:</label>
        <br />
        <input
          placeholder="Number of Doors"
          type="number"
          value={newCar.numberOfDoors}
          onChange={(e) => {
            setNewCar({ ...newCar, numberOfDoors: Number(e.target.value) });
          }}
        />
        <br />
        <br />
        <label>Is Automatic:</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setNewCar({ ...newCar, isAutomatic: Boolean(e.target.checked) });
          }}
        />
        <br />
        <label>Select Year: </label>
        <select
          name="years"
          id="years"
          value={newCar.selectedYear}
          onChange={assignSelectedYear}
        >
          <option disabled value="">
            Select Year
          </option>
          {years_list.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <br />
        <br />
        <fieldset>
          <legend>Engine Type:</legend>
          <div>
            <input
              type="radio"
              id="Diesel"
              name="Engine"
              value="Diesel"
              onChange={(e) => {
                setNewCar({ ...newCar, engine: e.target.value });
              }}
            />
            <label>Diesel</label>

            <input
              type="radio"
              id="Petrol"
              name="Engine"
              value="Petrol"
              onChange={(e) => {
                setNewCar({ ...newCar, engine: e.target.value });
              }}
            />
            <label>Petrol</label>

            <input
              type="radio"
              id="Electric"
              name="Engine"
              value="Electric"
              onChange={(e) => {
                setNewCar({ ...newCar, engine: e.target.value });
              }}
            />
            <label>Electric</label>

            <input
              type="radio"
              id="Hybrid"
              name="Engine"
              value="Hybrid"
              onChange={(e) => {
                setNewCar({ ...newCar, engine: e.target.value });
              }}
            />
            <label>Hybrid</label>
          </div>
        </fieldset>

        <button onClick={handleSubmitCar}>Submit</button>
        <button type="reset" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
}
