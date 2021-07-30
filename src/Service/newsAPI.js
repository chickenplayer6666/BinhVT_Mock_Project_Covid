import {AxiosDataNewsInstance} from "./AxiosService";
import {API_KEY} from "../Constant/apiURL"

const newsAPI = {
  getDataNewsForTitle(title) {
    const END_POINT = `top-headlines?q=${title}${API_KEY}`;
    return AxiosDataNewsInstance.get(END_POINT);
  },
};

export default newsAPI;