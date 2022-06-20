import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.label ? (
          <label htmlFor={this.props.for}>{this.props.label}</label>
        ) : null}
        <input
          type={this.props.type}
          name={this.props.for}
          id={this.props.for}
        />
      </div>
    );
  }
}
