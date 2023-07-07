import { PATH } from "../path";
import axios from "axios";
import { options } from "./services";

const userServices = {
  getUser: async (page: string) => {
    return axios
      .get(
        Number(page) > 1
          ? `${PATH.user}/order/?page=${page}`
          : `${PATH.user}/me/`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  resetPassword: async (email: string) => {
    return axios
      .post(`${PATH.user}/password-reset/`, { email: email })
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default userServices;
