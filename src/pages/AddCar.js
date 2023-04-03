import React, { useState, useEffect } from "react";
import carsService from "../services/CarsService";
import { useParams, useLocation } from "react-router-dom";
import Brand_Model from "../components/form_components/Brand_Model";
import MaxSpeed_NumberOfDoors from "../components/form_components/MaxSpeed_NumberOfDoors";
import IsAutomatic_SelectYear from "../components/form_components/IsAutomatic_SelectYear";
import EngineType from "../components/form_components/EngineType";
import FormButtons from "../components/form_components/FormButtons";

export default function AddCar() {
  let defaulFormState = {
    brand: "",
    model: "",
    year: "",
    max_speed: "",
    number_of_doors: "",
    is_automatic: false,
    engine: "",
  };

  const { id } = useParams();
  const location = useLocation();
  const [newCar, setNewCar] = useState(defaulFormState);

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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="AddCar">
      <form onSubmit={handleSubmit}>
        <Brand_Model newCar={newCar} setNewCar={setNewCar} />
        <br />
        <MaxSpeed_NumberOfDoors newCar={newCar} setNewCar={setNewCar} />
        <br />
        <IsAutomatic_SelectYear newCar={newCar} setNewCar={setNewCar} />
        <br />
        <EngineType newCar={newCar} setNewCar={setNewCar} />
        <FormButtons
          defaulFormState={defaulFormState}
          id={id}
          newCar={newCar}
          setNewCar={setNewCar}
        />
      </form>
    </div>
  );
}
