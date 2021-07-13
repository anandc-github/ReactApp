import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProducts } from "../../actions/products";
import ProductDisplay from "./ProductDisplay";
import { Link } from "react-router-dom";

const Menu = ({ getProducts, products: { products, addedItems } }) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div className="overlay">
      <div className="row p-5 body-css ">
        <div className="col-md-12">
          <div className="row menu ">
            <div className=" col-md-12">
              <button className="btn btn-menu " type="submit">
                MENU
              </button>
              <Link to="/cart">
                <button
                  className="btn cart-btn mr-1 float-right "
                  type="submit"
                >
                  Cart ({addedItems.length}){" "}
                </button>
              </Link>
            </div>
          </div>
          <div className="row p-3">
            {products.length
              ? products.map((product, i) => (
                  <ProductDisplay key={i} product={product} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { getProducts })(Menu);
