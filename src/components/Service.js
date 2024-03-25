import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000/predict";
class Service {
  postRequest(details) {
    return axios.post(API_BASE_URL, details);
  }
}

export default new Service();
