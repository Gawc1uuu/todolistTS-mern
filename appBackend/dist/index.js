"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todosRoutes_1 = __importDefault(require("./routes/todosRoutes"));
const cors_1 = __importDefault(require("cors"));
//connecting to db
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/todoList3")
    .then(() => {
    //listening for requests
    app.listen(4000, () => {
        console.log("listening on port 4000");
    });
    console.log("Connected to db");
})
    .catch((err) => {
    console.log(err);
});
//middleware
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
//routes
app.use("/api/todos", todosRoutes_1.default);
