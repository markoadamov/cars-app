import axios from "axios";

class HttpsService {
    constructor(){
        this.axiosInstance = axios.create({baseURL: "http://localhost:3000/api"})
    }
}

const httpService = new HttpsService();

export default httpService;