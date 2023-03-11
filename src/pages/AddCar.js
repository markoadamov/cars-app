import React, { useState } from "react";
import carsService from "../services/CarsService";

export default function AddCar() {
  const [newCar, setNewCar] = useState({
    brand: "",
    model: "",
    year: "",
    maxSpeed: 0,
    numberOfDoors: 4,
    isAutomatic: false,
    engine: "",
  });

  let years_list = [];

  for (let i = 1990; i <= 2018; i++) {
    years_list.push(i);
  }

  const handleSubmitCar = (e) => {
    e.preventDefault();

    console.log(newCar);
    carsService.Add(newCar);
  };

  function assignSelectedYear(e) {
    setNewCar({ ...newCar, year: Number(e.target.value) });
  }

  return (
    <div className="AddCar">
      <form onSubmit={handleSubmitCar}>
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

        <button>Submit</button>
      </form>
    </div>
  );
}
