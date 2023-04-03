import React from "react";
import CarRow from "./CarRow";
import carsService from "../services/CarsService";
import { useDispatch, useSelector } from "react-redux";
import { selectedCarsSelector } from "../store/cars/selectors";
import { setAllSelectedCars, setAllDeselectedCars } from "../store/cars/slice";

export default function CarsList({cars, setCars}) {

  const dispatch = useDispatch();
  const selectedCars = useSelector(selectedCarsSelector);

  const handleDelete = async (id) => {
    let carsUpdate = [];
    const decision = window.confirm("Are you sure you want to delete?");

    function updateFrontEnd(result) {
      if (result) {
        carsUpdate = cars.filter((car) => car.id !== id);
        dispatch(setCars(carsUpdate));
        //setCars(carsUpdate);
      }
    }

    if (decision) {
      let result = await carsService.delete(id);
      updateFrontEnd(result);
    }
  };

  const handleDeselectAll = () => {
    dispatch(setAllDeselectedCars(cars));
  }

  const handleSelectAll = () => {
    dispatch(setAllSelectedCars());
  }

  const handleSortAsc = (sortBy) => {
    let sortingArray = [...cars];
    sortingArray.sort((a, b) => String(a[sortBy]).localeCompare(String(b[sortBy])));
    dispatch(setCars(sortingArray));
    //console.log(sortingArray);
  }

  const handleSortDsc = (sortBy) => {
    let sortingArray = [...cars];
    sortingArray.sort((a, b) => String(b[sortBy]).localeCompare(String(a[sortBy])));
    dispatch(setCars(sortingArray));
    //console.log(sortingArray);
  }

  return (
    <div className="DivCarList">
      <table className="CarListTable">
        <thead>
          <tr>
            <th></th>
            <th>Car ID</th>
            <th><div className="BrandSpeedCell"><div>Brand</div> <div><button onClick={()=>handleSortAsc('brand')}>Sort Asc</button>||<button onClick={()=>handleSortDsc('brand')}>Sort Dsc</button></div></div></th>
            <th>Model</th>
            <th>Engine</th>
            <th>Automatic</th>
            <th><div className="BrandSpeedCell"><div>Max Speed</div> <div><button onClick={()=>handleSortAsc('max_speed')}>Sort Asc</button>||<button onClick={()=>handleSortDsc('max_speed')}>Sort Dsc</button></div></div></th>
            <th>Doors</th>
            <th>Year</th>
            <th>Selected: {selectedCars.length}</th>
            <th><button className="SelectDeselectButton" onClick={handleSelectAll}>Select All</button></th>
            <th><button className="SelectDeselectButton" onClick={handleDeselectAll}>Deselect All</button></th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <CarRow key={car.id} car={car} handleDelete={handleDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
