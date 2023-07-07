import { PATH } from "../path";
import axios from "axios";
import { options } from "./services";

interface Products {
  categories: number[];
}

const productsServices = {
  getProducts: async (products: Products, page: string) => {
    const newOptions = { options, params: products.categories.join(",") };

    return axios
      .get(`${PATH.products}/?page=${page}`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
  getProductsById: async (id: number) => {
    return axios
      .get(`${PATH.products}/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default productsServices;
