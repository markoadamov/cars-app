import httpService from "./HttpService";

class CarsService extends httpService{
  // constructor() {
  //   this.axios = httpService.axiosInstance;   // Ovo je staro/prethodno sto sam radio
  // }

  // async getAll() {
  //   return await this.axios.get("/cars");
  // }
  createQueryString(obj) {
    const queryArr = Object.keys(obj).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`);
    return `?${queryArr.join('&')}`;
  }

  async getAll(CarToSearch=undefined) {
    //const response = await this.client.get(`cars?brand=${CarToSearch.brand}&model=${CarToSearch.model}`);
    let queryString = "";

    CarToSearch && (queryString = this.createQueryString(CarToSearch))
    
    //const response = CarToSearch?await this.client.get(`cars?brand=${CarToSearch.brand}&model=${CarToSearch.model}`):await this.client.get("cars");
    const response = await this.client.get(`cars${queryString}`);

    //console.log(response);
    return response.data;

    // const { data } = await this.client.get("cars");  ILI ovako ali onda vracamo niz umesto promisa
    // return data;
  }

  async add(newCar, redirect) {
    //await this.axios.post("/cars", newCar);  Ovo je staro

    await this.client.post("cars", newCar);
    redirect();

    // const data = await this.client.post("cars", newCar); //Ovo je kako je u movies app radjeno
    // return data;
  }

  async edit(id, car, redirect) {
    // await this.axios.put(`/cars/${id}`, car);   //Ovo je staro/iz prethodnog projekta
    // redirect();

    await this.client.put(`cars/${id}`, car);
    redirect();
  }

  // async get(id) {
  //   return await this.axios.get(`/cars/${id}`);
  // }
  async get(id) {
    const response = await this.client.get(`cars/${id}`);
    return response;
  }

  async delete(id) {
    return await this.client.delete(`/cars/${id}`);
  }
}

const carsService = new CarsService();

export default carsService;
