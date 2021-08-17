import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { sanPham, xemChiTiet } = this.props;

    return (
      <div className="container">
        <div className="card bg-light" style={{ width: 300 }}>
          <img
            className="card-img-top"
            src={sanPham.img}
            alt="Card image"
            style={{ maxWidth: "100%", height: 250 }}
          />
          <div className="card-body text-center">
            <h4 className="card-title text-center">{sanPham.title}</h4>
            <p className="card-text">{sanPham.desc}</p>
            <a
              href="#"
              className="btn btn-primary"
              onClick={() => xemChiTiet(sanPham)}
              data-toggle="modal"
              data-target="#modelId"
            >
              Detail
            </a>
            <a href="#" className="btn btn-danger">
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}
