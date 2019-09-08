import React, { Component } from "react";
import { storeProducts, detailProducts } from "./data";

const productContext = React.createContext();
// provider
// consumer
export default class ProductProvider extends Component {
  state = {
    products: [],
    details: detailProducts
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProduct = [];
    storeProducts.forEach(item => {
      const singleProduct = { ...item };
      tempProduct = [...tempProduct, singleProduct];
    });
    this.setState(() => {
      return { products: tempProduct };
    });
  };
  getItem = id => {
    const { products } = this.state;
    const product = products.find(item => item.id === id);
    return product;
  };
  handleDetails = id => {
    const product = this.getItem(id);
    console.log(id, "id", product);
    this.setState({ details: product });
  };

  addToCart = productId => {
    console.log("add To cart" + productId);
  };

  render() {
    return (
      <productContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;

export { ProductProvider, ProductConsumer };
