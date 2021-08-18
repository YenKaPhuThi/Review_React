import React, { Component } from "react";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import ModalGioHang from "./ModalGioHang";
import phoneData from "../../../data/phoneData.json";

export default class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gioHang: [],
    };
  }

  // Lấy dữ liệu tại component BaiTapGioHang
  themGioHang = (sanPhamChon) => {
    // B1: Từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };

    // Kiểm tra sanPhamChon có trong giỏ hàng chưa
    let gioHangCapNhat = [...this.state.gioHang];
    let index = this.state.gioHang.findIndex(
      (sp) => sp.maSP === spGioHang.maSP
    );

    if (index !== -1) {
      // Sản phẩm được click đã có trong this.state.gioHang
      gioHangCapNhat[index].soLuong += 1;
    } else {
      // Sản phẩm được click chưa có trong this.state.gioHang
      gioHangCapNhat.push(spGioHang);
    }

    // Set state để component render lại
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  // Đặt sự kiện xóa giỏ hàng tại BaiTapGioHang
  xoaGioHang = (maSP) => {
    // Tìm trong giỏ hàng có spachứa maSP được click thì xóa
    // Cách xóa 1:
    // let gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP)

    // if(index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }

    // Cách xóa 2:
    const gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    // Cập nhật lại state giỏ hàng và render giao diện
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    // tangGiam === true: tăng số lượng, false: giảm só lượng
    // Xử lý tăng giảm
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }

    // Cập nhật giá trị và render giỏ hàng
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Bài Tập Giỏ Hàng</h3>
        <ModalGioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <div className="text-right">
          <span
            style={{ cursor: "pointer", fontSize: "17px", fontWeight: "bold" }}
            className="text-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({tongSoLuong})
          </span>
        </div>
        <DanhSachSanPhamGioHang
          mangSanPham={phoneData}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}
