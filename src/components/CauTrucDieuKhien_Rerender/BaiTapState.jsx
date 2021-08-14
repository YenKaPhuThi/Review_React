import React, { Component } from "react";

export default class BaiTapState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: "./img/imgRedCar.jpg",
    };
  }

  changeColor = (color) => {
    let imgSource = "";
    switch (color) {
      case "red": {
        imgSource = "./img/imgRedCar.jpg";
        break;
      }
      case "silver": {
        imgSource = "./img/imgSilverCar.jpg";
        break;
      }
      case "black": {
        imgSource = "./img/imgBlackCar.jpg";
        break;
      }
      default: {
        imgSource = "./img/imgRedCar.jpg";
      }
    }

    // Gọi phương thuwsd setState để truyền imgSource mới từ sự kiện click của button => render giao diện vs source mới
    this.setState({
      img: imgSource,
    });
  };

  render() {
    const styleButton = {
      color: "#fff",
    };
    return (
      <div className="container">
        <p>Please choose your favorite about car's color</p>
        <div className="row">
          <div className="col-md-6">
            <img src={this.state.img} className="w-100" alt="" />
          </div>
          <div className="col-md-6">
            <button
              onClick={() => this.changeColor("red")}
              className="btn btn-danger ml-3"
              style={styleButton}
            >
              Red Color
            </button>
            <button
              onClick={() => this.changeColor("silver")}
              className="btn btn-secondary ml-3"
              style={styleButton}
            >
              Silver Color
            </button>
            <button
              onClick={() => this.changeColor("black")}
              className="btn btn-dark ml-3"
              style={styleButton}
            >
              Black Color
            </button>
          </div>
        </div>
      </div>
    );
  }
}
