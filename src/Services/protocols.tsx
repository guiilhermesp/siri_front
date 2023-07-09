import { PATH } from "../path";
import axios from "axios";
import { options } from "./login";

const protocolsServices = {
  postProtocol: async (body: any) => {
    return axios
      .post(`${PATH.protocols}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProtocols: async (page: string) => {
    return axios
      .get(`${PATH.protocols}/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchProtocol: async (id: any, body: any) => {
    return axios
      .patch(`${PATH.protocols}/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteProtocol: async (id: string) => {
    return axios
      .delete(`${PATH.protocols}/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default protocolsServices;
