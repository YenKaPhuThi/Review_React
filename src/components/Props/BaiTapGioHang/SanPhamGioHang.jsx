import React, { Component } from "react";

export default class SanPhamGioHang extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;

    return (
      <div className="card text-center text-white">
        <img className="card-img-top" src={sanPham.hinhAnh} style={{minHeight: 348}} />
        <div className="card-body bg-dark">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button className="btn btn-danger" onClick={() => {
            themGioHang(sanPham)
          }}>Thêm giỏi hàng</button>
        </div>
      </div>
    );
  }
}
