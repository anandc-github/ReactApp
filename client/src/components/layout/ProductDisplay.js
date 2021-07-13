import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AddingInCart from "./AddingInCart";

const ProductDisplay = ({ product, products: { addedItems } }) => {
  const [unit, setUnit] = useState(0);
  let imageUrl = product.imgUrl;
  
  useEffect(() => {
    if (addedItems.length) {
      let obj = addedItems.find((p) => p["id"] === product["id"]);
      
      if (obj) {
        setUnit(obj.unit);
      }
    }
  }, [addedItems, product]);
  return (
    <div key={product["id"]} className="col-md-4">
      <div className="card">
        <h5 className="card-header">{product.title}</h5>
        <div className="card-body">
          <img src={imageUrl} alt={product.imgUrl} />
        </div>
        <div className="card-footer p-1">
          <div className="price-tag m-0 p-0">&#8377;{product.costPerUnit}</div>
         <AddingInCart productId={product['id']} unit={unit} />
        </div>
      </div>
    </div>
   
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductDisplay);
