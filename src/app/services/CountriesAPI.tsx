import axios from "axios";

export class CountriesAPI {
  private static path = 'http://localhost:3001';

  static async getAvailableCountries() {
    const { data } = await axios.get(`${this.path}/countries`);

    return data;
  }

  static async getCountryInfos(countryCode: string) {
    const { data } = await axios.get(
      `${this.path}/countries/${countryCode}/infos`
    );

    return data;
  }
}