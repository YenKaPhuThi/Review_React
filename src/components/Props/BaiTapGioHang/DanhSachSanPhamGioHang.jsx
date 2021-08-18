import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

export default class DanhSachSanPhamGioHang extends Component {
  renderSanPham = () => {
    const { mangSanPham, themGioHang } = this.props;
    return mangSanPham.map((sanPham, index) => {
      return (
        <div key={index} className="col-4">
          <SanPhamGioHang sanPham={sanPham} themGioHang={themGioHang} />
        </div>
      );
    });
  };

  render() {
    return <div className="row">{this.renderSanPham()}</div>;
  }
}
