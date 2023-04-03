import httpService from "./HttpService";

class AuthService extends httpService {
    async login(credentials) {
        const { data } = await this.client.post("/login", credentials);
        localStorage.setItem("token", data.token);
      }
      async register(userData) {
        const { data } = await this.client.post("/register", userData);
        localStorage.setItem("token", data.token);
      }
    
      async logout() {
        await this.client.post("/logout");
        localStorage.removeItem("token");
      }
}

const authService = new AuthService();

export default authService;