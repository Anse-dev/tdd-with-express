const express = require("express");

const userRouter = require("./src/user/userRouter");
const PORT = 3000;
const app = express();
app.use(express.json());
app.use(userRouter);
app.use((err, req, res, next) => {
  res.status(404).json({ body: err.message });
});
module.exports = app;
