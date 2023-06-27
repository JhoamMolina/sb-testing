"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        allCaps: { control: "boolean" },
    },
};
exports.default = meta;
exports.Basic = {
    args: { label: "Hello World", size: "normal", allCaps: false },
};
exports.AllCaps = {
    args: { label: "Hello World", size: "normal", allCaps: true },
};
exports.Secondary = {
    args: { label: "Hello World", size: "normal", color: "secondary" },
};
exports.Tertiary = {
    args: { label: "Hello World", size: "normal", color: "tertiary" },
};
exports.CustomFontColor = {
    args: {
        label: "Hello World",
        size: "h1",
    },
};
