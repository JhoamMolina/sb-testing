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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./myLabel.css");
var MyLabel = function (props) {
    var _a = props.label, label = _a === void 0 ? "No Label" : _a, _b = props.size, size = _b === void 0 ? "normal" : _b, _c = props.color, color = _c === void 0 ? "primary" : _c, _d = props.allCaps, allCaps = _d === void 0 ? false : _d, fontColor = props.fontColor;
    return ((0, jsx_runtime_1.jsx)("span", __assign({ className: "".concat(size, " text-").concat(color, " label"), style: {
            textTransform: allCaps ? "uppercase" : "none",
            color: fontColor,
        } }, { children: label })));
};
exports.MyLabel = MyLabel;
