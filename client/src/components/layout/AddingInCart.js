import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/products";

const AddingInCart = ({
  unit,
  addItemToCart,
  removeItemFromCart,
  productId,
  products: { addedItems },
}) => {
  let findProduct = addedItems.find((f) => f["id"] === productId);
  console.log(findProduct);
  const [unitCounter, setUnitCounter] = useState(unit);
  useEffect(() => {
    setUnitCounter(unit);
  }, [unit]);
  useEffect(() => {
    if (unitCounter > 0) {
      addItemToCart({ id: productId, unit: unitCounter });
    }
  }, [unitCounter, productId, addItemToCart]);

  const addItem = () => {
    setUnitCounter(1);
  };

  const removeItem = (event) => {
    if (unitCounter === 1) {
      removeItemFromCart({ id: productId });
    }
    setUnitCounter(unitCounter - 1);
  };

  const incrementItem = (event) => {
    setUnitCounter(unitCounter + 1);
  };

  return (
    <div className="quantity">
      <button className="btn minus-btn" type="button" onClick={removeItem} name="button">-</button>
      <input type="text" name="name" readOnly  value={findProduct && findProduct.unit ? findProduct.unit : 0 } maxLength="2" autoComplete="off"/>
      <button className="btn plus-btn" type="button" name="button" onClick={incrementItem}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addItemToCart, removeItemFromCart })(
  AddingInCart
);
