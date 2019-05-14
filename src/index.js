import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Board";
import { observe } from "./Game.js";
const rootEl = document.getElementById("root");

observe(knightPosition =>
  ReactDOM.render(<Board knightPosition={knightPosition} />, rootEl)
);
