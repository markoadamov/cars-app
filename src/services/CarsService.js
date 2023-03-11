import httpService from "./HttpService";

class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get("/cars");
  }

  async Add(car) {
    return await this.axios.post("/cars",car);
  }
}

const carsService = new CarsService();

export default carsService;
