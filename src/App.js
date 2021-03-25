"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var ReactDOM = require("react-dom");
var Header_1 = require("./Header");
ReactDOM.render(jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx(Header_1["default"], { text: "This is the props.text" }, void 0),
        jsx_runtime_1.jsx("p", { children: "this is a paragraph!!" }, void 0),
        jsx_runtime_1.jsx("a", __assign({ href: "#" }, { children: "Click me" }), void 0)] }, void 0), document.querySelector('#root'));
