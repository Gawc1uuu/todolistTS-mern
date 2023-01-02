"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoControllers_1 = require("../controllers/todoControllers");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
router.use(authMiddleware_1.authMiddleware);
router.get("/", todoControllers_1.getAllTodos);
router.post("/", todoControllers_1.addNewTodo);
router.delete("/:id", todoControllers_1.deleteTodo);
exports.default = router;
