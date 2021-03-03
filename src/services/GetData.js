import config from '../config';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getCategories() {
    return fetch(config.url.category);
  },
  getProducts() {
    return fetch(config.url.product);
  }
}
