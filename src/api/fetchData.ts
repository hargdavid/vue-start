import axios from "axios";
import type { IDataElement } from "../types/IDataElement";

const baseUrl = "https://624c1f7e71e21eebbcfa84a7.mockapi.io/";
const elementEndpoint = "/elements";

export const fetchData = async (): Promise<IDataElement[] | undefined> => {
  try {
    const response = await axios.get(`${baseUrl}${elementEndpoint}`);
    if (response.data) {
      return response.data;
    } else {
      return Promise.reject(undefined);
    }
  } catch (error) {
    console.error(error);
  }
};
