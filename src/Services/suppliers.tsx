import { PATH } from "../path";
import axios from "axios";
import { options } from "./login";

const suppliersServices = {
  getSuppliers: async (page: string) => {
    return axios
      .get(`${PATH.suppliers}/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSupplierById: async (id: number) => {
    return axios
      .get(`${PATH.suppliers}/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllSuppliers: async () => {
    return axios
      .get(`${PATH.suppliers}/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchSupplier: async (id: number, body: any) => {
    return axios
      .patch(`${PATH.suppliers}/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default suppliersServices;
