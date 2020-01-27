import React, { Component } from "react";
import './Header.scss';

export default class Header extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super()
  }

  render() {
    return (
      <header>
        <h2>To do List React</h2>
      </header>
    );
  }
}