import React, { useState, useEffect } from "react";
import carsService from "../services/CarsService";
import { useHistory, useParams, useLocation } from "react-router-dom";

export default function AddCar() {
  let defaulFormState = {
    brand: "",
    model: "",
    year: "",
    maxSpeed: "",
    numberOfDoors: "",
    isAutomatic: false,
    engine: "",
  };

  let history = useHistory();

  const { id } = useParams();
  const location = useLocation();
  const [newCar, setNewCar] = useState(defaulFormState);

  let years_list = Array.from({ length: 29 }, (_, i) => 1990 + i);
  let engine_type_list = ["Diesel", "Petrol", "Electric", "Hybrid"];

  useEffect(() => {
    if (id) {
      handleGetCar();
    } else {
      setNewCar(defaulFormState); // Ovo sam dodao zato sto bez toga forma ostaje ispunjena ako se ode sa /:id stranice na /add stranicu
    }
  }, [location]); // [location] je dodat zato sto ako je naveden prazan dependency niz, useEffect nece biti trigerovan kada se ode sa /:id stranice na /add

  const handleGetCar = async () => {
    const car = await carsService.get(id);
    setNewCar(car.data);
  };

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
          minLength="2"
          required
        />
        <br />
        <input
          placeholder="Model"
          type="text"
          value={newCar.model}
          onChange={(e) => {
            setNewCar({ ...newCar, model: e.target.value });
          }}
          minLength="2"
          required
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
          type="number"
          value={newCar.numberOfDoors}
          onChange={(e) => {
            setNewCar({ ...newCar, numberOfDoors: Number(e.target.value) });
          }}
          required
        />
        <br />
        <br />
        <label>Is Automatic:</label>
        <input
          type="checkbox"
          onChange={(e) => {
            setNewCar({ ...newCar, isAutomatic: Boolean(e.target.checked) });
          }}
          checked={newCar.isAutomatic === true && true}
        />
        <br />
        <label>Select Year: </label>
        <select
          name="years"
          id="years"
          value={newCar.year}
          onChange={assignSelectedYear}
          required
        >
          <option value="">Year</option>
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
            {engine_type_list.map((engine_type, index) => (
              <div key={engine_type} className="EngineTypeDiv">
                <input
                  name="Engine"
                  type="radio"
                  value={engine_type}
                  onChange={(e) => {
                    setNewCar({ ...newCar, engine: e.target.value });
                  }}
                  required={index === 0 && true}
                  checked={engine_type === newCar.engine && true}
                ></input>
                <label>{engine_type}</label>
              </div>
            ))}
          </div>
        </fieldset>

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
      </form>
    </div>
  );
}
