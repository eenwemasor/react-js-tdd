import React, { Component } from "react";

export default class Headerline extends Component {

  render() {
    const { header, desc } = this.props;

    if (!header) {
      return null;
    }
    return (
      <div data-test="HeadlineComponent">
        <h1 data-test = "Header">{header}</h1>
        <p data-test = "Desc">{desc}</p>
      </div>
    );
  }
}
