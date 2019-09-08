import React, { Component, Fragment } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  render() {
    return (
      <Fragment>
        <div className="container py-5">
          <Title name="Our" title="Products" />
          <div className="row">
            <ProductConsumer>
              {value => {
                const { products } = value;
                return products.map(product => {
                  return <Product key={product.id} product={product} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </Fragment>
      // <Product />
    );
  }
}
