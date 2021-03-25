"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomDate = void 0;
var React = require("react");
function CustomDate() {
    var _a = React.useState(""), date = _a[0], setDate = _a[1];
    var _b = React.useState(""), time = _b[0], setTime = _b[1];
    var getDate = function () {
        setDate(new Date().toDateString());
    };
    var getTime = function () {
        setTime(new Date().toTimeString());
    };
    var handleGetTimeDate = function (e) {
        getDate();
        getTime();
    };
    return (React.createElement("div", null,
        date,
        React.createElement("br", null),
        time,
        React.createElement("br", null),
        React.createElement("button", { onClick: handleGetTimeDate }, "Get the Date and time")));
}
exports.CustomDate = CustomDate;
