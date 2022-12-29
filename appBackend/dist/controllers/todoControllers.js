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
exports.deleteTodo = exports.addNewTodo = exports.getAllTodos = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield todoModel_1.default.find({});
        return res.status(200).json(allTodos);
    }
    catch (err) {
        return res.status(500).json({ err: "Cannot load todos" });
    }
});
exports.getAllTodos = getAllTodos;
const addNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text } = req.body;
    try {
        const newTodo = yield todoModel_1.default.create({ text });
        return res.status(200).json(newTodo);
    }
    catch (err) {
        return res.status(500).json({ err: "invalid todo" });
    }
});
exports.addNewTodo = addNewTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const deletedTodo = yield todoModel_1.default.findByIdAndDelete(id);
        return res.status(200).json(deletedTodo);
    }
    catch (err) {
        return res.status(500).json({ err: "cannot delete todo" });
    }
});
exports.deleteTodo = deleteTodo;
