import {
  PRODUCT_LIST_REQ,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQ,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from '../types/productTypes';

export const productListReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQ:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, products: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQ:
      return { loading: true, product: {} };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, product: action.payload };

    default:
      return state;
  }
};
