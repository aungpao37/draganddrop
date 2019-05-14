import React, { Component } from "react";
import DropCard from "./Dropcard";
export default class True extends Component {
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
  render() {
    return (
      //   <div className="scrollbar" id="custom-scrollbar">
      //     <div className="header">
      //       <div className="tmp-header">สรุปข้อมูลการ์ด</div>
      //       <div className="day-header-3" />
      //       {this.state.timedatas.map((timedata, id) => (
      //         <div key={id} className="period-header">
      //           {timedata.title}
      //         </div>
      //       ))}
      //     </div>
      //     <div
      //       className="desk bg-grey-salt"
      //       style={{
      //         width: 200,
      //         display: "inline-block",
      //         height: 700,
      //         overflow: "hidden",
      //         minHeight: 300,
      //         marginRight: 20,
      //         verticalAlign: "top"
      //       }}
      //     >
      //       <div className="desk-head" />
      /* CARDSSS */

      //   <div className="desk-name" />

      //   <div
      //     className="desk-tmp"
      //     style={{ overflow: "hidden auto", height: "calc(100% - 100px)" }}
      //   />
      //   <button
      //     className="btn delete-btn"
      //     style={{
      //       background: "transparent",
      //       height: 100,
      //       width: 200,
      //       position: "relative",
      //       marginTop: 0,
      //       borderTop: "2px solid rgb(238, 241, 245)",
      //       color: "rgb(255, 255, 255)"
      //     }}
      //   >
      //     <i
      //       className="fas fa-trash-alt"
      //       style={{ width: "100%", textAlign: "center", fontSize: 40 }}
      //     />
      //     <p
      //       className="delete-label"
      //       style={{ textAlign: "center", marginTop: 10, fontSize: 20 }}
      //     >
      //       ถังขยะ
      //     </p>
      //   </button>
      // </div>
      <div className="table" style={{ display: "inline" }}>
        <div
          style={{
            display: "inline-block",
            marginLeft: 0,
            marginRight: "-50px",
            marginBottom: 0
          }}
        >
          {this.state.daydatas.map(daydata => (
            <DropCard
              key={daydata.id}
              // id={daydata.id}
              titleday={daydata.titleday}
              droppedItem={this.state.droppedItem}
              onDrop={this.onDrop}
              timedatas={this.state.timedatas}
            >
              <br />
            </DropCard>
          ))}
        </div>
      </div>
      //   </div>
    );
  }
}
