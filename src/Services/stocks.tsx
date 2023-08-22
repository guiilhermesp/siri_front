import { PATH } from "../path";
import axios from "axios";
import { options } from "./login";

const stocksServices = {
  getStocks: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllStocks: async () => {
    return axios
      .get(`${PATH.stocks}/all-stocks/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockItems: async (stock_id: string, page: string) => {
    const newOptions = { options, params: stock_id };
    return axios
      .get(`${PATH.stocks}/stock-items/?page=${page}`, newOptions)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getSectors: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/sectors/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllSectors: async () => {
    return axios
      .get(`${PATH.stocks}/sectors/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postCategory: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/categories/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getCategories: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/categories/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllCategories: async () => {
    return axios
      .get(`${PATH.stocks}/categories/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchCategory: async (id: string) => {
    return axios
      .patch(`${PATH.stocks}/categories/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteCategory: async (id: string) => {
    return axios
      .delete(`${PATH.stocks}/categories/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postMeasure: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/measures/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getMeasures: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/measures/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllMeasures: async () => {
    return axios
      .get(`${PATH.stocks}/measures/all`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchMeasure: async (id: string) => {
    return axios
      .patch(`${PATH.stocks}/measures/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteMeasure: async (measure_id: string) => {
    return axios
      .delete(`${PATH.stocks}/measures/${measure_id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postProduct: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/products/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProducts: async (page: any) => {
    return axios
      .get(`${PATH.stocks}/products/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllProducts: async (protocolId?: null) => {
    return axios
      .get(
        `${PATH.stocks}/products/all/${
          protocolId ? `?protocol_id=${protocolId}` : ``
        }`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchProduct: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.stocks}/products/${id}/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteProduct: async (id: string | number) => {
    return axios
      .delete(`${PATH.stocks}/products/${id}/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getReceivingReports: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/receiving-reports/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchReceivingReport: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.stocks}/receiving-reports/${id}/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchReceivingReportFile: async (id: number, file: any) => {
    return axios
      .patch(`${PATH.stocks}/receiving-reports/${id}/`, file, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getdispatchProducts: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/dispatch-reports/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchDispatchReportFile: async (id: number, file: any) => {
    return axios
      .patch(`${PATH.stocks}/dispatch-reports/${id}/`, file, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postInvoice: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/invoices/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getInvoices: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/invoices/?page=${page}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllInvoices: async () => {
    return axios
      .get(`${PATH.stocks}/invoices/all/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteInvoices: async (invoice_id: string) => {
    return axios
      .delete(`${PATH.stocks}/invoices/${invoice_id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProtocols: async () => {
    return axios
      .get(`${PATH.stocks}/protocols`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllProtocols: async () => {
    return axios
      .get(`${PATH.stocks}/protocols`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getPublicDefenses: async () => {
    return axios
      .get(`${PATH.stocks}/public-defenses`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllPublicDefenses: async () => {
    return axios
      .get(`${PATH.stocks}/public-defenses/all/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postBiddingExemption: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/bidding-exemption/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getBiddingExemption: async (page: string) => {
    return axios
      .get(`${PATH.stocks}/bidding-exemption/?page=${page}/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postAccountantReports: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/accountant-reports/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAccountantReports: async () => {
    return axios
      .get(`${PATH.stocks}/accountant-reports`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAccountantReportsWithQueryString: async (date: string) => {
    return axios
      .get(`${PATH.stocks}/accountant-reports/?date=${date}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteAccoutantReports: async (id: string) => {
    return axios
      .delete(`${PATH.stocks}/accountant-reports/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getWarehouseReports: async () => {
    return axios
      .get(`${PATH.stocks}/warehouse-items/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getStockReports: async (queryString: any) => {
    return axios
      .get(`${PATH.stocks}/stock-report/?${queryString}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postSupplier: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/suppliers/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  patchSupplier: async (id: string, body: any) => {
    return axios
      .patch(`${PATH.stocks}/suppliers/${id}`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteSupplier: async (id: string) => {
    return axios
      .delete(`${PATH.stocks}/suppliers/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  postProtocolItem: async (body: any) => {
    return axios
      .post(`${PATH.stocks}/protocol-items/`, body, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getProtocolItems: async (id: string, page: string) => {
    return axios
      .get(
        `${PATH.stocks}/protocol-items/?protocol_id=${id}&&page=${page}`,
        options
      )
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  getAllProtocolItems: async (id: string) => {
    return axios
      .get(`${PATH.stocks}/protocol-items/all/?protocol_id=${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteProtocolItem: async (id: string) => {
    return axios
      .delete(`${PATH.stocks}/protocol-items/${id}`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  deleteBiddingExemption: async (id: string) => {
    return axios
      .delete(`${PATH.stocks}/biddings-exemption/${id}/`, options)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },

  sendEmail: async (subject: string, message: string) => {
    const body = {
      subject: subject,
      message: message,
    };
    return axios
      .post(`${PATH.stocks}/email/`, body)
      .then((data: any) => data)
      .catch((err: any) => console.log(err));
  },
};

export default stocksServices;
