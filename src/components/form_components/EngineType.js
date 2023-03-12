import React from "react";

export default function EngineType({ newCar, setNewCar }) {
  let engine_type_list = ["Diesel", "Petrol", "Electric", "Hybrid"];

  return (
    <div>
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
    </div>
  );
}
