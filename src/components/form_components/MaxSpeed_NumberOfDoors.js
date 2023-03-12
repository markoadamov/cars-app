import React from "react";

export default function MaxSpeed_NumberOfDoors({ newCar, setNewCar }) {
  return (
    <div>
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
    </div>
  );
}
