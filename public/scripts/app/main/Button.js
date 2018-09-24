import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }
  render() {
    return (
      <span
        style={{ color: this.props.active ? 'red' : '' }}
        onMouseDown={this.onToggle}
      >
        <i className="material-icons">{this.props.label}</i>
      </span>
    );
  }
}

export default Button;
