import {AxiosDataCovidInstance} from "./AxiosService";

const countryApi = {
  getAllCountries() {
    const END_POINT = "countries";
    return AxiosDataCovidInstance.get(END_POINT);
  },

  getCountry(country) {
    const END_POINT = `countries/${country}`;
    return AxiosDataCovidInstance.get(END_POINT);
  },

  getHistoricalStatisticalOfCovid(country) {
    const END_POINT = `historical/${country}?lastdays=365`;
    return AxiosDataCovidInstance.get(END_POINT);
  },

  getStatisticsOverview() {
      const END_POINT = `all`;
      return AxiosDataCovidInstance.get(END_POINT);
  }
};

export default countryApi;