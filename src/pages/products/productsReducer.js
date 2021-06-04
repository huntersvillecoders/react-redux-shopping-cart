import { products } from "../../data/products";
export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";

export const addProductToCart = (item) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    data: item,
  };
};
export const ProductsReducer = (
  state = { items: [], products: products },
  action: any
) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      let items = [...state.items];
      items.indexOf(action.data.entity) === -1 &&
        items.push(action.data.entity);
      return { ...state, items };
    default:
      return state;
  }
  return state;
};
