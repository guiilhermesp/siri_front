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

  getAllOrdersItems: async (id: any) => {
    return axios
      .get(`${PATH.orders}/order-items/all/?order_id=${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getOrdersItems: async (id: string, page: string) => {
    const newOptions = { options, params: id };
    return axios
      .get(`${PATH.orders}/order-items/?page=${page}`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteOrderItems: async (id: string, description?: string) => {
    let url = `${PATH.orders}/order-items/${id}`;
    if (description) {
      url += `/?description=${encodeURIComponent(description)}`;
    }
    return axios
      .delete(url, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteOrder: async (id: string) => {
    return axios
      .delete(`${PATH.orders}/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSuppliersOrdersById: async (id: string) => {
    const newOptions = { options, params: id };
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

  getSupplierOrderItems: async (id: string, page: string) => {
    const newOptions = { options, params: id };
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

  deleteMaterialOrder: async (id: string) => {
    return axios
      .delete(`${PATH.orders}/materials-order/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockEntries: async (id: string, page: string) => {
    return axios
      .get(
        `${PATH.orders}/stock-entries/?page=${page}/&stock_item_id=${id}`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockWithDrawals: async (id: string, page: string) => {
    return axios
      .get(
        `${PATH.orders}/stock-withdrawals/?page=${page}/&stock_item_id=${id}`,
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

  editSupplierOrder: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.orders}/supplier-orders/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  createSupplierOrder: async (body: any) => {
    return axios
      .post(`${PATH.orders}/supplier-orders/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  createSupplierOrderItem: async (body: any) => {
    return axios
      .post(`${PATH.orders}/supplier-order-item/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteGeneralOrderItem: async (id: string) => {
    return axios
      .delete(`${PATH.orders}/supplier-order-item/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteWithDraw: async (id: string) => {
    return axios
      .delete(`${PATH.orders}/stock-withdrawals/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteGeneralSupplierOrder: async (id: string) => {
    return axios
      .delete(`${PATH.orders}/supplier-orders/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchMaterialsOrder: async (id: number, body: FormData) => {
    return axios
      .patch(`${PATH.orders}/materials-order/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  updateOrder: async (id: number, body: any) => {
    return axios
      .patch(`${PATH.orders}/${id}/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  updateOrderItem: async (id: number, body: any) => {
    return axios
      .patch(`${PATH.orders}/order-items/${id}/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  createOrder: async (body: any) => {
    return axios
      .post(`${PATH.orders}/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  createOrderItems: async (body: any[]) => {
    return axios
      .post(`${PATH.orders}/order-items/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  createStockWithDrawal: async (body: any) => {
    return axios
      .post(`${PATH.orders}/stock-with-drawals/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default ordersServices;
