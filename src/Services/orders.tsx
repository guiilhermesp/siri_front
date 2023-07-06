import { PATH } from "../path";
import axios from "axios";
import { options } from "./services";

const ordersServices = {
  getOrders: async (page: string) => {
    return axios
      .get(`${PATH.orders}/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllOrdersItems: async (orderId: any) => {
    return axios
      .get(`${PATH.orders}/order-items/all/?order_id=${orderId}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getOrdersItems: async (orderId: string, page: string) => {
    const newOptions = { options, params: orderId };
    return axios
      .get(`${PATH.orders}/order-items/?page=${page}`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteOrderItems: async (order_item_id: string, description?: string) => {
    let url = `${PATH.orders}/order-items/${order_item_id}`;
    if (description) {
      url += `/?description=${encodeURIComponent(description)}`;
    }
    return axios
      .delete(url, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteOrder: async (order_id: string) => {
    return axios
      .delete(`${PATH.orders}/${order_id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSuppliersOrdersById: async (supplierId: string) => {
    const newOptions = { options, params: supplierId };
    return axios
      .get(`${PATH.orders}/supplier-orders`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSupplierOrders: async () => {
    return axios
      .get(`${PATH.orders}/supplier-orders`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSupplierOrderItems: async (supplier_order_Id: string, page: string) => {
    const newOptions = { options, params: supplier_order_Id };
    return axios
      .get(`${PATH.orders}/supplier-orders-items/?page=${page}`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getMaterialsOrder: async (page: string) => {
    return axios
      .get(`${PATH.orders}/materials-order/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteMaterialOrder: async (order_id: string) => {
    return axios
      .delete(`${PATH.orders}/materials-order/${order_id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockEntries: async (stock_item_id: string, page: string) => {
    return axios
      .get(
        `${PATH.orders}/stock-entries/?page=${page}/&stock_item_id=${stock_item_id}`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockWithDrawals: async (stock_item_id: string, page: string) => {
    return axios
      .get(
        `${PATH.orders}/stock-withdrawals/?page=${page}/&stock_item_id=${stock_item_id}`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getMaterialsOrderStatusCode: async (
    supplier_id: any,
    category_id: any,
    initial_date: any,
    final_date: any
  ) => {
    return axios
      .get(
        `${PATH.orders}/supplier-order-items/?supplier_id=${supplier_id}&initial_date=${initial_date}&final_date=${final_date}&category_id=${category_id}`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default ordersServices;
