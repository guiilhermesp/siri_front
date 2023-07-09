const baseurl = {
  apiUrl: "http://52.67.57.23:8000",
};
export const PATH = {
  login: baseurl.apiUrl,
  user: baseurl.apiUrl,
  account: baseurl.apiUrl + "/me/",
  products: baseurl.apiUrl + "/stock/products",
  orders: baseurl.apiUrl + "/order",
  protocols: baseurl.apiUrl + "/stock/protocols",
  suppliers: baseurl.apiUrl + "/stock/suppliers",
  stocks: baseurl.apiUrl + "/stock",
};
