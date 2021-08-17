import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    const { dt, xemChiTiet } = this.props;
    return (
      <div className="col-4">
        <div className="card">
          <img
            className="card-img-top"
            style={{ minHeight: 348 }}
            src={dt.hinhAnh}
            alt
          />
          <div className="card-body">
            <h4 className="card-title">{dt.tenSP}</h4>
            <button className="btn btn-success" onClick={() => xemChiTiet(dt)}>
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
