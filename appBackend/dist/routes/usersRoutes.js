"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post("/login", (req, res) => {
    return res.status(200).json({ msg: "LOGINING A NEW USER" });
});
router.post("/signup", (req, res) => {
    return res.status(200).json({ msg: "SIGNING UP A NEW USER" });
});
exports.default = router;
