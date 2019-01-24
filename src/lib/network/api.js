import Http from './Http';

// assuming all the resource will come from this url
const http = new Http({
  baseURL: 'https://whitechdevs.github.io/reactjs-test',
});

const getResource = url => http.get(url);

const getProductsRequest = () => getResource('/products.json');

export default getProductsRequest;
