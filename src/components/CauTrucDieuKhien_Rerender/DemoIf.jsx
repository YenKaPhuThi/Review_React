import React, { Component } from "react";

export default class DemoIf extends Component {
  constructor(props) {
    super(props);
    // this.state là thuộc tính có sẵn của component, chứa các thuộc tính có khả năng thay đổi bởi 1 sự kiện nào đó của component
    this.state = {
      isLogin: false,
      userName: "",
    };
  }

  login = () => {
    // this.setState(): là phương thức kế thừa từ class componen => thay đổi giá trị state và gọi hàm render => render lại giao diện
    // setState là phương thức bất đồng bộ
    this.setState({
      isLogin: true,
      userName: "Yen Ka",
    }, () => {console.log(this.state)});
  };

  logout = () => {
    this.setState({
      isLogin: false,
      userName: "",
    }, () => {console.log(this.state)});
  }

  // Cách 1: Dùng phương thức kết hợp if để xác định nội dung render giao diện
  // renderContent = () => {
  //   if (this.isLogin) { // isLogin === true => Người dùng đã đăng nhập
  //     this.userName = "Yen Ka";
  //     return (
  //       <div>Hello {this.userName} <button>Log out</button></div>
  //     )
  //   }

  //   return (
  //     <div>
  //       <button>Login</button>
  //     </div>
  //   )
  // }

  // Phương thức render của component DemoIf
  render() {
    return (
      <div>
        {/* {this.renderContent()} */}

        {this.state.isLogin ? (
          <div>
            Hello {this.state.userName} FE <button onClick={this.logout}>Log out</button>
          </div>
        ) : (
          <div>
            <button onClick={this.login}>Login</button>
          </div>
        )}
      </div>
    );
  }
}
