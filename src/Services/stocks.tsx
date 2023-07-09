import { PATH } from "../path";
import axios from "axios";
import { options } from "./login";

const stocksServices = {
  getStocks: async (page: string) => {
    return axios
      .get(`${PATH.user}/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllStocks: async () => {
    return axios
      .get(`${PATH.user}/all-stocks/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockItems: async (stock_id: string, page: string) => {
    const newOptions = { options, params: stock_id };
    return axios
      .get(`${PATH.user}/stock-items/?page=${page}`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSectors: async (page: string) => {
    return axios
      .get(`${PATH.user}/sectors/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllSectors: async () => {
    return axios
      .get(`${PATH.user}/sectors/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postCategory: async (body: any) => {
    return axios
      .post(`${PATH.user}/categories/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getCategories: async (page: string) => {
    return axios
      .get(`${PATH.user}/categories/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllCategories: async () => {
    return axios
      .get(`${PATH.user}/categories/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchCategory: async (id: string) => {
    return axios
      .patch(`${PATH.user}/categories/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteCategory: async (id: string) => {
    return axios
      .delete(`${PATH.user}/categories/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postMeasure: async (body: any) => {
    return axios
      .post(`${PATH.user}/measures/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getMeasures: async (page: string) => {
    return axios
      .get(`${PATH.user}/measures/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllMeasures: async () => {
    return axios
      .get(`${PATH.user}/measures/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchMeasure: async (id: string) => {
    return axios
      .patch(`${PATH.user}/measures/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteMeasure: async (measure_id: string) => {
    return axios
      .delete(`${PATH.user}/measures/${measure_id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postProduct: async (body: any) => {
    return axios
      .post(`${PATH.user}/products/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProducts: async (page: string) => {
    return axios
      .get(`${PATH.user}/products/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllProducts: async (protocolId: null) => {
    return axios
      .get(
        `${PATH.user}/products/all/${
          protocolId ? `?protocol_id=${protocolId}` : ``
        }`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchProduct: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.user}/products/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteProduct: async (id: string) => {
    return axios
      .delete(`${PATH.user}/products/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getReceivingReports: async (page: string) => {
    return axios
      .get(`${PATH.user}/receiving-reports/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchReceivingReport: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.user}/receiving-reports/${id}/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchReceivingReportFile: async (id: number, file: any) => {
    return axios
      .patch(`${PATH.user}/receiving-reports/${id}/`, file, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getdispatchProducts: async (page: string) => {
    return axios
      .get(`${PATH.user}/dispatch-reports/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchDispatchReportFile: async (id: number, file: any) => {
    return axios
      .patch(`${PATH.user}/dispatch-reports/${id}/`, file, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postInvoice: async (body: any) => {
    return axios
      .post(`${PATH.user}/invoices/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getInvoices: async (page: string) => {
    return axios
      .get(`${PATH.user}/invoices/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllInvoices: async () => {
    return axios
      .get(`${PATH.user}/invoices/all/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteInvoices: async (invoice_id: string) => {
    return axios
      .delete(`${PATH.user}/invoices/${invoice_id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProtocols: async () => {
    return axios
      .get(`${PATH.user}/protocols`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllProtocols: async () => {
    return axios
      .get(`${PATH.user}/protocols`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getPublicDefenses: async () => {
    return axios
      .get(`${PATH.user}/public-defenses`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllPublicDefenses: async () => {
    return axios
      .get(`${PATH.user}/public-defenses/all/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postBiddingExemption: async (body: any) => {
    return axios
      .post(`${PATH.user}/bidding-exemption/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getBiddingExemption: async (page: string) => {
    return axios
      .get(`${PATH.user}/bidding-exemption/?page=${page}/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postAccountantReports: async (body: any) => {
    return axios
      .post(`${PATH.user}/accountant-reports/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAccountantReports: async () => {
    return axios
      .get(`${PATH.user}/accountant-reports`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAccountantReportsWithQueryString: async (date: string) => {
    return axios
      .get(`${PATH.user}/accountant-reports/?date=${date}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteAccoutantReports: async (id: string) => {
    return axios
      .delete(`${PATH.user}/accountant-reports/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getWarehouseReports: async () => {
    return axios
      .get(`${PATH.user}/warehouse-items/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockReports: async (queryString: any) => {
    return axios
      .get(`${PATH.user}/stock-report/?${queryString}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postSupplier: async (body: any) => {
    return axios
      .post(`${PATH.user}/suppliers/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchSupplier: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.user}/suppliers/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteSupplier: async (id: string) => {
    return axios
      .delete(`${PATH.user}/suppliers/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postProtocolItem: async (body: any) => {
    return axios
      .post(`${PATH.user}/protocol-items/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProtocolItems: async (id: string, page: string) => {
    return axios
      .get(
        `${PATH.user}/protocol-items/?protocol_id=${id}&&page=${page}`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllProtocolItems: async (id: string) => {
    return axios
      .get(`${PATH.user}/protocol-items/all/?protocol_id=${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteProtocolItem: async (id: string) => {
    return axios
      .delete(`${PATH.user}/protocol-items/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteBiddingExemption: async (id: string) => {
    return axios
      .delete(`${PATH.user}/biddings-exemption/${id}/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  sendEmail: async (subject: string, message: string) => {
    const body = {
      subject: subject,
      message: message,
    };
    return axios
      .post(`${PATH.user}/email/`, body)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default stocksServices;
