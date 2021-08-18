import React, { Component } from "react";

export default class ModalGioHang extends Component {
  renderGioHang = () => {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;

    return gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>
            <img src={spGH.hinhAnh} style={{ maxWidth: 100 }} />
          </td>
          <td>{spGH.tenSP}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => tangGiamSoLuong(spGH.maSP, true)}
            >
              +
            </button>
            {spGH.soLuong}
            <button
              className="btn btn-primary"
              onClick={() => tangGiamSoLuong(spGH.maSP, false)}
            >
              -
            </button>
          </td>
          <td>{spGH.giaBan.toLocaleString()}</td>
          <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => {
                xoaGioHang(spGH.maSP);
              }}
            >
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    const { gioHang } = this.props;
    return gioHang.reduce((tongTien, spGioHang, index) => {
      return tongTien += spGioHang.soLuong * spGioHang.giaBan
    }, 0).toLocaleString()
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ Hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã Sản Phẩm</th>
                    <th>Hình Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Đơn Giá</th>
                    <th>Thành Tiền</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5" className="text-right"></td>
                    <td><strong>Tổng tiền: </strong></td>
                    <td>{this.tinhTongTien()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
