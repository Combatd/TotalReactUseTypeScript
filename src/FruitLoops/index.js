"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitLoops = void 0;
var React = require("react");
function FruitLoops() {
    var fruit = ['red', 'green', 'blue', 'yellow'];
    return (React.createElement(React.Fragment, null,
        React.createElement("ul", null, fruit.map(function (value, index) {
            return React.createElement("li", { key: index },
                " ",
                value,
                "  ");
        }))));
}
exports.FruitLoops = FruitLoops;
