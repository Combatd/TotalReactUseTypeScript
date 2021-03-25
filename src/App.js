"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var Header_1 = require("./Header");
var CustomDate_1 = require("./CustomDate");
ReactDOM.render(React.createElement("div", null,
    React.createElement(Header_1.default, { text: "Satisfied as text type" }),
    React.createElement(CustomDate_1.CustomDate, null),
    React.createElement("p", null, "this is a paragraph!!"),
    React.createElement("a", { href: "#" }, "Click me")), document.querySelector('#root'));
