import httpService from "./HttpService";

class CarsService {
  constructor() {
    this.axios = httpService.axiosInstance;
  }

  async getAll() {
    return await this.axios.get("/cars");
  }

  async add(car, redirect) {
    await this.axios.post("/cars",car);
    redirect();
  }

  async edit (id, car, redirect) {
    await this.axios.put(`/cars/${id}`,car);
    redirect();
  }

  async get(id) {
    return await this.axios.get(`/cars/${id}`);
  }
}

const carsService = new CarsService();

export default carsService;
