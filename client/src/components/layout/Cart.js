import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setAlert }  from '../../actions/alert'

const Cart = ({ setAlert,history, products: { addedItems, total } }) => {
  const submitOrder = () => {
    setAlert('Order Placed Successfully','success');
    history.push('/')
  };
  return (
    <>
      {addedItems.length ? (
        <div className="body-css">
          <div className="card cardBillDesign col-md-6 p-0 offset-3">
            <div className="card-header font-weight-bold">
              <h4>Your Cart</h4>
            </div>
            <div className="card-body p-1">
              <h6 className="text-center">Bill Details</h6>
              <table className="table text-center">
                <thead>
                  <tr className="font-weight-bold ">
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Cost Per unit</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <>
                  <tbody>
                    {addedItems.map((product, i) => (
                      <tr key={i}>
                        <td>{product.title}</td>
                        <td>{product.unit}</td>
                        <td>&#8377;{product.costPerUnit}</td>
                        <td>
                          &#8377;{product.unit * parseInt(product.costPerUnit)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </>
              </table>
              <div>
                <div className="row">
                  <div className="col-9">Sub Total</div>
                  <div className="col-3">&#8377;{total}</div>
                </div>
                <div className="row">
                  <div className="col-9">Delivery Charges</div>
                  <div className="col-3">&#8377;30.00</div>
                </div>
                <div className="row">
                  <div className="col-9">Tax (CGST 2.5% and SGST2.5%) </div>
                  <div className="col-3">
                    &#8377;{(total * (5 / 100)).toFixed(2)}
                  </div>
                </div>
                <div className="row">
                  <h5 className="col-9 ">Grand Total</h5>
                  <div className="col-3">
                    &#8377; {(total + 30 + total * (5 / 100)).toFixed(2)}
                  </div>
                </div>
              </div>
            </div>
            <div classnName="card-footer">
              <button
                className="btn btn-success   mt-2 mr-2 p-2 float-right " 
                type="submit" onClick={submitOrder}
              >
                Place Your Order
              </button>
              <Link to="/menu">
                <a href="#" className="font-weight-bold m-2 p-2 float-right">
                  Edit Cart
                </a>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="body-css">
            <div className="card cardheight cardBillDesign col-md-4 p-0 offset-4">
              <div className="card-header">Your Cart</div>
              <div className="card-body text-center p-1">
                Your cart is Empty. Add Items To Cart
                <div>
                <Link to="/menu">
                <button className="btn btn-success  mr-1" type="submit">
                  Add Items
                </button>
                </Link>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      )}
    </>
  );
};
const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps,{setAlert})(Cart);
