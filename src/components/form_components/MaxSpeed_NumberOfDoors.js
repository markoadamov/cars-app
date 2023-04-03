import React from "react";

export default function MaxSpeed_NumberOfDoors({ newCar, setNewCar }) {
  return (
    <div>
      <label>Max Speed:</label>
      <br />
      <input
        type="number"
        value={newCar.max_speed}
        onChange={(e) => {
          setNewCar({ ...newCar, max_speed: Number(e.target.value) });
        }}
      />
      <br />
      <br />
      <label>Number of Doors:</label>
      <br />
      <input
        type="number"
        value={newCar.number_of_doors}
        onChange={(e) => {
          setNewCar({ ...newCar, number_of_doors: Number(e.target.value) });
        }}
        required
      />
    </div>
  );
}
