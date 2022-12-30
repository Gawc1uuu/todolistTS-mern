import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  return res.status(200).json({ msg: "LOGINING A NEW USER" });
});

router.post("/signup", (req, res) => {
  return res.status(200).json({ msg: "SIGNING UP A NEW USER" });
});

export default router;
