import httpService from "./HttpService";

class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get("/cars");
  }

  async Add(car, redirect) {
    await this.axios.post("/cars",car);
    redirect();
  }
}

const carsService = new CarsService();

export default carsService;
