import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  renderProduct = () => {
    // Lấy giá trị mảng sản phẩm từ component chia truyền vào thông qua thuộc tính this.props
    let { mangSanPham, xemChiTiet } = this.props;
    return mangSanPham.map((sp, index) => {
      return (
        <div key={index} className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3 mt-2">
          <Product sanPham={sp} xemChiTiet={xemChiTiet} />
        </div>
      );
    });
  };

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="container">
          <div className="row">{this.renderProduct()}</div>
        </div>
      </section>
    );
  }
}
