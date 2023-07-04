import { PATH } from "../path";
import axios from "axios";

const services = {
  account: async (user: string, password: string) => {
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
