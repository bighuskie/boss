const express = require("express");
const app = express();
const userRouter = require("./routers/user");

app.use("/user", userRouter);

//设置允许跨域访问该服务.
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.listen(8080, function() {
  console.log("server running");
});
