import { PATH } from "../path";
import axios from "axios";

interface Body {
  username: string;
  password: string;
  remember: boolean;
}

const username = sessionStorage.getItem("username");
const password = sessionStorage.getItem("password");

export const options = {
  headers: {
    // Authorization: "Basic " + btoa(`${username}:${password}`),
    Authorization: "Basic " + btoa(`${"admin"}:${"admin"}`),
  },
};

const loginServices = {
  login: async (body: Body) => {
    return axios
      .post(`${PATH.login}/login/`, body)
      .then((data: any) => {
        sessionStorage.setItem("username", body.username);
        sessionStorage.setItem("password", body.password);
        return data;
      })
      .catch((err: any) => console.log(err));
  },
};

export default loginServices;
