import React, { Component } from "react";
import ShowCards from "./showcard";
// function collect(connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget(),
//     hovered: monitor.isOver(),
//     item: monitor.getItem()
//   };
// }
// const spec = {
//   drop(props, monitor, component) {
//     const item = monitor.getItem();
//     props.onDrop(item);
//   }
// };
const gridItem1 = {
  border: "1px solid white",
  height: 100,
  width: 100,
  background: "transparent",
  position: "absolute",
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
export default class DropCard extends Component {
  render() {
    let {
      isOver,
      canDrop,
      connectDropTarget,
      onDrop,
      droppedItem,
      id,
      key,
      titleday,
      timedatas
    } = this.props;
    // console.log('Drop', droppedItem, key, id)
    // if (id != 'days1') {
    //   droppedItem = {}
    // }
    return (
      <div>
        <div
          key={id}
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
          <p style={{ fontSize: 16, width: 100 }}>{titleday}</p>
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
            <div
              className="gridTable bg-grey-salt"
              style={{
                position: "relative",
                width: "calc(100% - 50px)"
              }}
            >
              <ShowCards />
              {/* {timedatas.map((timedata, key) => ( */}
              {/* <ShowCards key={key} /> */}
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
