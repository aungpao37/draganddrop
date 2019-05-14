import React, { Component } from "react";
import { DragSource } from "react-dnd";
import { ItemTypes } from "./contain";

const knightSource = {
  beginDrag(props) {
    return {};
  }
};
function collect(connect, monitor) {
  console.log("Drag", monitor);
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}
class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div>
        <div
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: "bold",
            cursor: "move"
          }}
        >
          <div
            className="draggableCard"
            id="cardaadd8b58-0055-4864-8a62-c06f3069a008"
            draggable="true"
            style={{
              position: "absolute",
              float: "left",
              opacity: 1,
              height: 100,
              width: 100,
              backgroundColor: "rgb(44, 204, 228)",
              border: "2px solid rgb(255, 255, 255)",
              cursor: "move",
              color: "rgb(255, 255, 255)",
              padding: 0,
              left: "0px",
              zIndex: 2
            }}
          >
            <div id="aadd8b58-0055-4864-8a62-c06f3069a008">
              <div className="item-container">
                <div className="item-content" style={{ textAlign: "center" }}>
                  <div>ไทย</div>
                </div>
              </div>
              <div className="item-container second">
                <div className="item-content" style={{ textAlign: "center" }}>
                  <div>ปรพ</div>
                </div>
              </div>
              <div className="item-container last">
                <div className="item-content" style={{ textAlign: "center" }}>
                  <div>2305</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DragSource(ItemTypes.CARDS, knightSource, collect)(Knight);
