import { combineReducers } from "redux";
import { ProductsReducer } from "../pages/products/productsReducer";
import { navBarReducer } from "../pages/navbar/navBarReducer";
export default combineReducers({
  products: ProductsReducer,
  navbar: navBarReducer,
});
