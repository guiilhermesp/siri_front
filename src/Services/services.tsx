import { PATH } from "../path";
import axios from "axios";
import { options } from "./login";

const services = {
  getAccount: async () => {
    return axios
      .get(PATH.account, options)
      .then((data: any) => {
        return data;
      })
      .catch((err: any) => console.log(err));
  },
};

export default services;
