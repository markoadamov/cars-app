import React, { useEffect, useState } from "react";
import carsService from "../services/CarsService";
import CarsList from "../components/CarsList";
import { setCars } from "../store/cars/slice";
import { useDispatch, useSelector } from "react-redux";
import { carsSelector } from "../store/cars/selectors";
import PageLoadingGif from "../components/PageLoadingGif";

export default function AppCars() {
  const dispatch = useDispatch();
  //const [cars, setCars] = useState([]);
  const cars = useSelector(carsSelector);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleGetCars();
  }, []);

  const handleGetCars = async (pageToLoad = 1) => {
    setIsLoading(true);
    console.log(pageToLoad);
    const response = await carsService.getAll({
      per_page: 5,
      page: pageToLoad,
    });
    //console.log(response.data);
    //setCars(response.data);
    if (response.data.length === 0) {
      console.log("Nema Sledece Stranice");
      setCurrentPage(pageToLoad - 1);
    } else {
      dispatch(setCars(response.data));
      setCurrentPage(pageToLoad);
    }
    setIsLoading(false);
  };

  const handleNextPage = async () => {
    await handleGetCars(currentPage + 1);
  };

  const handlePreviousPage = async () => {
    if (currentPage - 1 > 0) {
      await handleGetCars(currentPage - 1);
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {isLoading ? (
        <PageLoadingGif />
      ) : null}

      <CarsList cars={cars} setCars={setCars} />
      <div className="NextPreviousPageButtons">
        <button onClick={handlePreviousPage}> Previous Page </button>
        <label> -- Current Page: {currentPage} -- </label>
        <button onClick={handleNextPage}> Next Page </button>
      </div>
    </div>
  );
}
