import httpService from "./HttpService";

class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get("/cars");
  }
}

const carsService = new CarsService();

export default carsService;
