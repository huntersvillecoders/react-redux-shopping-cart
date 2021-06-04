import { connect } from "react-redux";
import { Navbar } from "./navbar.componet";
// import { addProductToCart } from './productsReducer';
import { bindActionCreators } from "redux";

const mapStateToProps = (state) => {
  console.log("state in navbar", state);
  const {
    products: { products, items },
  } = state;
  return {
    products,
    items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
