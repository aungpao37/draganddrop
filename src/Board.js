import React, { Component } from "react";
import Knight from "./Knight";
import ShowCards from "./showcard";
import TEST from "./TEST";
import BoardTEST from "./BoardTEST";
import True from "./true";
import Deskplay from "./deskplay";
import { moveKnight } from "./Game";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
const gridItem1 = {
  border: "1px solid white",
  height: 100,
  width: 100,
  background: "transparent",
  position: "initial",
  display: "-webkit-inline-box",
  marginBottom: "-5px"
};
const gridItem2 = {
  borderRight: "1px dashed rgb(238, 238, 238)",
  height: 100,
  width: 100,
  background: "transparent",
  position: "absolute",
  display: "-webkit-inline-box",
  marginBottom: "-5px"
};
const gridLineSplit = {
  borderTop: "1px solid rgb(238, 238, 238)",
  borderBottom: "1px solid rgb(238, 238, 238)",
  height: 34,
  width: 920,
  background: "transparent",
  position: "absolute",
  display: "-webkit-inline-box",
  marginBottom: "-5px",
  top: 34,
  left: 0
};
class Board extends Component {
  state = {
    timedatas: [
      { id: "0", title: "8.00-9.00" },
      { id: "1", title: "9.00-10.00" },
      { id: "2", title: "10.00-11.00" },
      { id: "3", title: "11.00-12.00" }
      // { id: "4", title: "12.00-13.00" },
      // { id: "5", title: "13.00-14.00" },
      // { id: "6", title: "14.00-15.00" },
      // { id: "7", title: "15.00-16.00" },
      // { id: "8", title: "16.00-17.00" }
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
  handleSquareClick(toX, toY) {
    moveKnight(toX, toY);
  }
  handleClick = () => {
    alert("testest");
  };
  renderTEST(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    return (
      <Deskplay x={x} y={y}>
        {this.renderPiece(x, y)}
      </Deskplay>
    );
  }
  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <ShowCards x={x} y={y}>
        {this.renderPiece(x, y)}
      </ShowCards>
    );
  }
  renderPiece(x, y) {
    const [knightX, knightY] = this.props.knightPosition;
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  }
  render() {
    const squares = [];
    for (let i = 1; i < 7; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div className="scrollbar" id="custom-scrollbar">
        <TEST />
        {this.renderTEST(0, 0)}

        <div className="table" style={{ display: "inline" }}>
          <div
            style={{
              display: "inline-block",
              marginLeft: 0,
              marginRight: "-50px",
              marginBottom: 0
            }}
          >
            {squares}
          </div>
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Board);
