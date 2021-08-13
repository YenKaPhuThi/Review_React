import React, { Component } from 'react'

export default class Event extends Component {
  // Phương thức xử lý cho nút click
  handleShowMessage = () => {
    alert("Hi React");
  }
  
  render() {
    let message = "Hello React";

    return (
      <div className="container">
        {/* <button on onClick={this.handleShowMessage.bind(this, message)}>Show message</button> */}
        <button onClick={() => {this.handleShowMessage(message)}}>Show message</button>
      </div>
    )
  }
}
