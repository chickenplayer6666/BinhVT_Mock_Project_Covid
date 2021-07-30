import axios from "axios";
import {
  API_DATA_COVID_DOMAIN,
  API_NEWS_COVID_DOMAIN,
} from "../Constant/apiURL";

const AxiosDataCovidInstance = axios.create({
  baseURL: API_DATA_COVID_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

const AxiosDataNewsInstance = axios.create({
  baseURL: API_NEWS_COVID_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

export { AxiosDataCovidInstance, AxiosDataNewsInstance };
