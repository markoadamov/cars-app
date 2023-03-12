import React from 'react'

export default function Brand_Model({newCar, setNewCar}) {
  return (
    <div>
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
    </div>
  )
}
