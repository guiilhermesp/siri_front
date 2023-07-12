import { PATH } from "../path";
import axios from "axios";
import { options } from "./login";

const userServices = {
  getUser: async (body: any) => {
    return axios
      .get(`${PATH.user}/me/`, body)
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
