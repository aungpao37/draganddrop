import React, { Component } from "react";
import Board from "./Board";
export default class TEST extends Component {
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
      <div className="header">
        <div className="tmp-header">สรุปข้อมูลการ์ด</div>
        <div className="day-header-3" />
        {this.state.timedatas.map((timedata, id) => (
          <div key={id} className="period-header">
            {timedata.title}
          </div>
        ))}
      </div>
    );
  }
}
