"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function Header(props) {
    React.useEffect(function () {
        alert(document.querySelector('#myHeader'));
    });
    return (React.createElement("h1", { id: "myHeader", className: "primary-header" }, props.text));
}
exports.default = Header;
