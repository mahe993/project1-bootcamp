import React from "react";

export default class Input extends React.Component {
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
          placeholder={this.props.placeholder}
          value={this.props.value}
          onSubmit={this.props.onSubmit}
          maxLength={this.props.maxLength}
        />
      </div>
    );
  }
}
