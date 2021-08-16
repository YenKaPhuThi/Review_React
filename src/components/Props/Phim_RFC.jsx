import React from "react";

export default function Phim_RFC({phim, ...restParam}) {

  return (
    <div className="card">
      <img className="card-img-top" src={phim.hinhAnh} alt />
      <div className="card-body">
        <h4 className="card-title">{phim.tenPhim}</h4>
        <p className="card-text">{phim.moTa}</p>
      </div>
    </div>
  );
}
