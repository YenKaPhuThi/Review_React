import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="container">
          <div className="row">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </section>
    );
  }
}
