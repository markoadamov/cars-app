import React from "react";

export default function IsAutomatic_SelectYear({ newCar, setNewCar }) {
  let years_list = Array.from({ length: 29 }, (_, i) => 1990 + i);

  function assignSelectedYear(e) {
    setNewCar({ ...newCar, year: Number(e.target.value) });
  }

  return (
    <div>
      <label>Is Automatic:</label>
      <input
        type="checkbox"
        onChange={(e) => {
          setNewCar({ ...newCar, is_automatic: Boolean(e.target.checked) });
        }}
        checked={newCar.is_automatic === true && true}
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
    </div>
  );
}
