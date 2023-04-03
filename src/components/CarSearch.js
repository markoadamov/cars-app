import React from "react";
import { useState } from "react";
import carsService from "../services/CarsService";
import CarsList from "./CarsList";

export default function CarSearch() {
  const [CarToSearch, setCarToSearch] = useState({ brand: "", model: "" });
  const [cars, setCars] = useState([]);
  const [searchStatus,setSearchStatus] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();

    const response = await carsService.getAll(CarToSearch);

    console.log(response.data);
    
    if(response.data.length>0)
    {
        setCars(response.data);
        setSearchStatus("success");
    }
    else
    {
        setSearchStatus("fail");
    }
  };

  return (
    <div className="CarSearchDiv">
      <form onSubmit={handleSearch}>
        <label>Search Car:</label>
        <br />
        <input
          placeholder="Brand"
          type="text"
          value={CarToSearch.brand}
          onChange={(e) => {
            setCarToSearch({ ...CarToSearch, brand: e.target.value });
          }}
          minLength="2"
          //required
        />
        <br />
        <input
          placeholder="Model"
          type="text"
          value={CarToSearch.model}
          onChange={(e) => {
            setCarToSearch({ ...CarToSearch, model: e.target.value });
          }}
          minLength="2"
          //required
        />
        <br />
        <button>Submit</button>
      </form>
      {(searchStatus==="success")&&<CarsList cars={cars} setCars={setCars}/>}
      {(searchStatus==="fail")&&<p style={{color: "red"}}>Nema automobila sa trazenim pojmovima</p>}
    </div>
  );
}
