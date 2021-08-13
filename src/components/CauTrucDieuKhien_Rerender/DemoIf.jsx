import React, { Component } from "react";

export default class DemoIf extends Component {
  // Thuộc tính
  isLogin = true;
  userName = "";

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
        
        {this.isLogin ? (
          <div>
            Hello {this.userName} FE <button>Log out</button>
          </div>
        ) : (
          <div>
            <button>Login</button>
          </div>
        )}
      </div>
    );
  }
}
