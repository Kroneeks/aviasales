import React, { Component } from "react";

import "./CheckBox.css";

export class CheckBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isInputChecked: false,
    };
  }

  onInputClick = () => {
    this.setState(
      {
        isInputChecked: !this.state.isInputChecked,
      },
      () => {
        this.props.onClick(this.props.children.tag, this.state.isInputChecked);
      }
    );
  };

  render() {
    return (
      <>
        {this.state.isInputChecked ? (
          <span className="focus checkbox-root">
            <span className="focus checkbox-container">
              <input
                className="checkbox-input"
                type="checkbox"
                required={this.props.required}
                onClick={this.onInputClick}
              />
              <label>{this.props.children.text}</label>

              <svg
                className="checkbox-svg"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </span>
          </span>
        ) : (
          <span className="checkbox-root">
            <span className="checkbox-container">
              <input
                className="checkbox-input"
                type="checkbox"
                required={this.props.required}
                onClick={this.onInputClick}
              />
              <label>{this.props.children.text}</label>

              <svg
                className="checkbox-svg"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
              </svg>
            </span>
          </span>
        )}
      </>
    );
  }
}
