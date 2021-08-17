import React, { Component } from 'react'
import Footer from './Footer';
import Header from "./Header";
import ProductList from './ProductList';
import Slider from "./Slider";
import data from "../../data/productData.json"

export default class BaiTapComponent extends Component {
  mangSanPham =  data;

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList mangSanPham={this.mangSanPham} />
        <Footer />
      </div>
    )
  }
}
