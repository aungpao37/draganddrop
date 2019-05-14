import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import { ItemTypes } from "./contain";
import { moveKnight } from "./Game";
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
  width: 900,
  background: "transparent",
  position: "absolute",
  display: "-webkit-inline-box",
  marginBottom: "-5px",
  top: 34,
  left: 0
};
class ShowCards extends Component {
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
  rendertable(i) {
    return (
      <div className="gridItem" style={gridItem1}>
        <div className="gridItem" style={gridItem2} />
        <div className="gridLineSplit" style={gridLineSplit} />
      </div>
    );
  }

  render() {
    // const table = [];
    // for (let i = 1; i < 9; i++) {
    //   table.push(this.rendertable(i));
    // }

    // const times = [];
    // for (let i = 1; i < 5; i++) {
    //   times.push(this.renderTime(i));
    // }
    let {
      isOver,
      canDrop,
      connectDropTarget,
      droppedItem,
      index,
      student,
      subject,
      key,
      days,
      room,
      test
    } = this.props;
    return connectDropTarget(
      <t>
        <div
          className="RowTitle bg-grey-mint"
          style={{
            height: 100,
            display: "inline-block",
            width: 135,
            textAlign: "center",
            border: "1px solid white",
            color: "white",
            marginBottom: "-17px",
            top: "-17px",
            position: "relative"
          }}
        >
          <p style={{ fontSize: 16, width: 100 }}>
            {this.state.daydatas[1].titleday}
          </p>
          <div
            style={{
              left: 100,
              width: 35,
              height: 35,
              position: "absolute",
              top: "-1px",
              border: "1px solid rgb(255, 255, 255)"
            }}
          >
            <i
              className="fa fa-book"
              style={{
                color: "rgb(255, 255, 255)",
                padding: "9px 6px 6px",
                fontSize: 16
              }}
            />
          </div>
          <div
            style={{
              left: 100,
              width: 35,
              height: 34,
              position: "absolute",
              top: 33,
              border: "1px solid rgb(255, 255, 255)"
            }}
          >
            <i
              className="fa fa-users"
              style={{
                color: "rgb(255, 255, 255)",
                padding: "9px 6px 6px",
                fontSize: 16
              }}
            />
          </div>
          <div
            style={{
              left: 100,
              width: 35,
              height: 34,
              position: "absolute",
              top: 66,
              border: "1px solid rgb(255, 255, 255)"
            }}
          >
            <i
              className="fa fa-building"
              style={{
                color: "rgb(255, 255, 255)",
                padding: "9px 6px 6px",
                fontSize: 16
              }}
            />
          </div>
        </div>
        <div
          className="cell"
          style={{
            width: 950,
            display: "inline-block",
            height: 100,
            overflow: "hidden",
            borderRadius: 0,
            padding: 0,
            margin: 0,
            verticalAlign: "middle",
            position: "relative"
          }}
        >
          <div className="desk-items" style={{ overflow: "hidden" }}>
            {this.props.children}
            <div
              className="gridTable bg-grey-salt"
              style={{
                position: "relative",
                width: "calc(100% - 50px)"
              }}
            >
              {this.state.timedatas.map((timedata, key) => (
                <div className="gridItem" style={gridItem1}>
                  <div className="gridItem" style={gridItem2} />
                  <div className="gridLineSplit" style={gridLineSplit} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
      </t>
    );
  }
}
const squareTarget = {
  drop(props) {
    moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}
export default DropTarget(ItemTypes.CARDS, squareTarget, collect)(ShowCards);
