import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "car",
  initialState: {
   data: [],
   selectedCars: []
  },
  reducers: {
    setCars: (state, action) => {
      state.data = action.payload;
    },
    setSelectedCars: (state, action) => {
      state.selectedCars.push(action.payload);
    },
    setDeselectedCar: (state, action) => {
      state.selectedCars = state.selectedCars.filter((id) => id !== action.payload);
    },
    setAllSelectedCars: (state) => {
      state.selectedCars = state.data.map((car) => car.id);
    },
    setAllDeselectedCars: (state) => {
      state.selectedCars = [];
    }
  },
});

//console.log(carsSlice);

export const { setCars, setSelectedCars, setDeselectedCar, setAllSelectedCars, setAllDeselectedCars } = carsSlice.actions;

export default carsSlice.reducer;