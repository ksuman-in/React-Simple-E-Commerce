/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from "react";
import ProductWrapper from "./Styles/ProductWrapper";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { product } = this.props;
    const { id, title, img, price, inCart } = product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => {
              return (
                <div
                  className="img-container"
                  onClick={() => value.handleDetails(id)}
                >
                  <Link to="/details">
                    <img
                      src={img}
                      alt="Product image"
                      className="card-img-top"
                    />
                  </Link>
                  <button className="card-btn" disabled={inCart ? true : false}>
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        In Cart
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </ProductConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <span className="mr-1">$ {price}</span>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
