const express = require("express");
const userRouter = express.Router();

const { save } = require("./userService");

userRouter.post("/api/1.0/users", async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return next(new Error("Invalid Request"));
  }
  const usersaved = await save(username, password, email);
  return res.status(200).json(username);
});

module.exports = userRouter;
