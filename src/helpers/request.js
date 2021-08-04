import Wrap from './axiosWrapper';

export const getProductList = (params = {}) => {
  return Wrap({
    url: '/products',
    method: 'GET',
    params : {...params},
  });
};
