"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = exports.signupController = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (_id) => {
    const token = jsonwebtoken_1.default.sign({ _id }, "secret", { expiresIn: 60 * 60 });
    return token;
};
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield userModel_1.default.login(email, password);
        const token = createToken(user._id);
        return res.status(200).json({ email, token });
    }
    catch (err) {
        return res.status(401).json({ err: err.message });
    }
});
exports.loginController = loginController;
const signupController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    console.log(email, password);
    try {
        const user = yield userModel_1.default.signup(email, password);
        const token = createToken(user._id);
        return res.status(200).json({ email, token });
    }
    catch (err) {
        return res.status(401).json({ err: err.message });
    }
});
exports.signupController = signupController;
