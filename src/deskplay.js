import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./contain";
import { moveKnight } from "./Game";
export default class Deskplay extends Component {
  render() {
    // const connectDropTargets = this.props;
    return (
      // connectDropTargets

      <div
        className="desk bg-grey-salt"
        style={{
          width: 200,
          display: "inline-block",
          height: 700,
          overflow: "hidden",
          minHeight: 300,
          marginRight: 20,
          verticalAlign: "top"
        }}
      >
        <div className="desk-head" />

        <div className="desk-name" />

        <div
          className="desk-tmp"
          style={{ overflow: "hidden auto", height: "calc(100% - 100px)" }}
        >
          {this.props.children}
        </div>

        <button
          className="btn delete-btn"
          style={{
            background: "transparent",
            height: 100,
            width: 200,
            position: "relative",
            marginTop: 0,
            borderTop: "2px solid rgb(238, 241, 245)",
            color: "rgb(255, 255, 255)"
          }}
        >
          <i
            className="fas fa-trash-alt"
            style={{ width: "100%", textAlign: "center", fontSize: 40 }}
          />
          <p
            className="delete-label"
            style={{ textAlign: "center", marginTop: 10, fontSize: 20 }}
          >
            ถังขยะ
          </p>
        </button>
      </div>
    );
  }
}
// const squareTarget = {
//   drop(props) {
//     moveKnight(props.x, props.y);
//   }
// };

// function collect(connect, monitor) {
//   return {
//     connectDropTargets: connect.dropTarget(),
//     isOver: monitor.isOver()
//   };
// }
// export default DropTarget(ItemTypes.CARDS, squareTarget, collect)(Deskplay);
