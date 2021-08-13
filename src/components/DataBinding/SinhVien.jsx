import React, { Component } from "react";

export default class SinhVien extends Component {
  // Thuộc tính hoTen, lop thuộc class SinhVien
  hoTen = "Nguyen Van A";
  lop = "FrontEnd xxx";
  tenTrungTam = "Yen Ka";

  // Thuộc tính hoạt động trên tất cả các hàm thuộc lớp đối tượng
  // Biên thì hoạt động trong hàm thôi
  renderThongTinSinhVien = (tenTrungTam) => {
    return (
      <ul>
        <li>Họ tên: {this.hoTen}</li>
        <li>Lớp: {this.lop}</li>
        <li>Trung tâm: {tenTrungTam}</li>
      </ul>
    );
  };

  // Phương thức render là phương thức thuộc class SinhVien
  render() {
    // Biến của hàm render
    const tenTrungTam = "Yen Ka";
    return <div className="container">
      {this.renderThongTinSinhVien(tenTrungTam)}
    </div>;
  }
}
