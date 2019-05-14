import React, { Component } from "react";
import TEST from "./TEST";
import Knight from "./Knight";
import Board from "./Board";

import Deskplay from "./deskplay";
export default class BoardTEST extends Component {
  state = {
    timedatas: [
      { id: "0", title: "8.00-9.00" },
      { id: "1", title: "9.00-10.00" },
      { id: "2", title: "10.00-11.00" },
      { id: "3", title: "11.00-12.00" },
      { id: "4", title: "12.00-13.00" },
      { id: "5", title: "13.00-14.00" },
      { id: "6", title: "14.00-15.00" },
      { id: "7", title: "15.00-16.00" },
      { id: "8", title: "16.00-17.00" }
    ],
    daydatas: [
      { id: "days1", titleday: "จันทร์" },
      { id: "days2", titleday: "อังคาร" },
      { id: "days3", titleday: "พุธ" },
      { id: "days4", titleday: "พฤหัส" },
      { id: "days5", titleday: "ศุกร์" },
      { id: "days6", titleday: "เสาร์" }
    ]
  };
  renderTEST(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return <Deskplay x={x}>{this.renderPiece(x, y)}</Deskplay>;
  }
  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }
  render() {
    return <div>{this.renderTEST(0, 0)}</div>;
  }
}
