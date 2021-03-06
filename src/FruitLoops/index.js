"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitLoops = void 0;
var React = require("react");
function FruitLoops(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", null, props.fruit.map(function (value, index) {
            return React.createElement("li", { key: index, style: { color: value } },
                " ",
                value,
                "  ");
        }))));
}
exports.FruitLoops = FruitLoops;
