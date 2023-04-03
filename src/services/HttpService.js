import axios from "axios";

export default class HttpService {
  constructor() {
    this.client = axios.create({
      baseURL: "http://localhost:8000/api",
    });

    this.client.interceptors.request.use(function (req) {
      const token = localStorage.getItem("token");
      if (token) {
        req.headers["Authorization"] = `Bearer ${token}`;
      }
      return req;
    });
  }
}

// import axios from "axios";  // Ovo je staro/prethodno sto sam radio

// class HttpsService {
//     constructor(){
//         this.axiosInstance = axios.create({baseURL: "http://localhost:3000/api"})
//     }
// }

// const httpService = new HttpsService();

// export default httpService;  // Ovo je staro/prethodno sto sam radio






