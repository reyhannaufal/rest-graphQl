"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 9000;
app.get("/index", (req, res) => {
    res.send("Hello World");
});
const one = 1;
const two = 2;
const three = false;
app.listen(port);
console.log(`Is runing in ${port}`);
