import { connect } from "react-redux";
import { Product } from "./products.component";
import { addProductToCart } from './productsReducer';
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
  console.log("state ", state);
  const {
    products: { products, items }
  } = state;
  // const products = state.products.products
  // const items = state.products.items

  return {
    products,
    items
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addProductToCart
  }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
