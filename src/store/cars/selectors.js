const carsSelector = (state) => {
    return state.cars.data;
};

const selectedCarsSelector = (state) => {
    return state.cars.selectedCars;
};

export { carsSelector, selectedCarsSelector }; 