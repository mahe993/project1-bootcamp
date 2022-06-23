import React from "react";

export default class AccountPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="accountInfo">
        <div className="userInfo">
          <p>{this.props.userInfo[0].username}</p>
          <p>{"$" + this.props.userInfo[0].accountBalance}</p>
        </div>
        <button>Menu</button>
      </div>
    );
  }
}
