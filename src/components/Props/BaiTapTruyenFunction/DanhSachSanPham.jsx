import React, { Component } from "react";
import phoneData from "../../../data/phoneData.json";
import SanPham from "./SanPham";

export default class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sanPhamChiTiet: phoneData[0],
    };
  }

  renderSanPham = () => {
    return phoneData.map((dt, index) => {
      return (
        <SanPham key={index} dt={dt} xemChiTiet={this.xemChiTiet}/>
      );
    });
  };

  // Dữ liệu cần lấy ở component DanhSachSanPhm => đặt callback function ở DanhSachSanPham
  // Xử lý nút xem chi tiết
  xemChiTiet = (sanPham) => {
    // Thay đổi giá trị phone chi tiết
    this.setState({
      sanPhamChiTiet: sanPham
    })
  }

  render() {
    console.log("sanPhamChitiet change");
    const {sanPhamChiTiet} = this.state;

    return (
      <>
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-6">
            <div className="text-center">
              <h3>{sanPhamChiTiet.tenSP}</h3>
              <img src={sanPhamChiTiet.hinhAnh} style={{width: 250}} alt="" />
            </div>
          </div>
          <div className="col-6">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <th>{sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>Hệ điều hành</th>
                <th>{sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera trước</th>
                <th>{sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera sau</th>
                <th>{sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>Ram</th>
                <th>{sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>Rom</th>
                <th>{sanPhamChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}
