import { PATH } from "../path";
import axios from "axios";

const user = sessionStorage.getItem("user");
const password = sessionStorage.getItem("password");

export const options = {
  headers: {
    Authorization: "Basic " + btoa(`${user}:${password}`),
  },
};

const services = {
  getAccount: async (user: string, password: string) => {
    const options = {
      headers: {
        Authorization: "Basic " + btoa(`${user}:${password}`),
      },
    };

    return axios
      .get(PATH.account, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default services;
