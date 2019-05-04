const express = require("express");
const app = express();
const User = require("./models/user");
const kitty = new User({ name: "Zildjian", email: "1214", password: "12131" });
User.find().then(data=>{
    console.log(data)
})

//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});



app.get("/data", function(req, res) {
  res.json({ name: "react", type: "IT" });
});

app.listen(8080, function() {
  console.log("server running");
});
