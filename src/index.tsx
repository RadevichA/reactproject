import React from "react";
import ReactDOM from "react-dom";

const name = "Алексей";
const element = <h1>Привет, {name}</h1>;

ReactDOM.render(element, document.getElementById("root"));
