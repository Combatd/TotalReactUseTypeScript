"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDate = void 0;
var React = require("react");
function CustomDate() {
    var date = new Date().toDateString();
    return (React.createElement("div", null,
        date,
        React.createElement("button", null, "Get the Date")));
}
exports.CustomDate = CustomDate;
