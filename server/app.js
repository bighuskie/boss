const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const userRouter = require("./routers/user");

//设置允许跨域访问该服务.
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

//中间件的执行顺序有要求
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/user", userRouter);

app.listen(8080, function() {
  console.log("server running");
});
