/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { details, addToCart } = value;
          console.log(value);
          const { id, title, img, price, company, info, inCart } = details;
          return (
            <div className="container py-4">
              <div className="row">
                <div className="col-10 mx-auto text-center text-blue text-slanted my-4">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                  <img src={img} alt="product image" className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-2 text-capitalize">
                  <h3>Modal: {title}</h3>
                  <h4>Made by : {company} </h4>
                  <h4>Price : ${price} </h4>
                  <p className="text-capitalize mt-3 mb-0 font-weight-bold">
                    Some Info About Product
                  </p>
                  <p className="text-muted">{info}</p>
                </div>
              </div>
              <div className="row">
                <div className="col offset-3">
                  <div className="d-flex">
                    <Link to="/" className="btn btn-outline-info mr-1">
                      Back To Product
                    </Link>
                    <button
                      className="btn btn-outline-warning"
                      disabled={inCart}
                      onClick={() => addToCart(id)}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
