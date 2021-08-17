import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import Slider from "./Slider";
import data from "../../data/productData.json";
import Modal from "./Modal";

export default class BaiTapComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanPhamModal: {},
    };
  }

  // Dữ liệu cần nhận ở đâu thì mình tạo callback function ở component đó
  xemChiTiet = (sanPhamChiTiet) => {
    this.setState({
      sanPhamModal: sanPhamChiTiet,
    });
  };

  mangSanPham = data;

  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet} />
        <Footer />
        <Modal sanPhamModal={this.state.sanPhamModal} />
      </div>
    );
  }
}
