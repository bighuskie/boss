const express = require("express");
const Router = express.Router();
const UserDB = require("../models/user");
const utils = require("../util/index");

Router.get("/info", (req, res) => {
  UserDB.find()
    .then(data => {
      return res.json({ code: 1, data });
    })
    .catch(err => {
      console.log("UserDB出错了");
    });
});

//用户注册
Router.post("/info", (req, res) => {
  let { account, password, identity } = req.body;
  UserDB.findOne({ account }, (err, data) => {
    if (data) {
      return res.json({ code: 0, msg: "用户名已存在" });
    }
    new UserDB({ account, password: utils.MD5Password(password), identity })
      .save()
      .then(() => {
        console.log("UserDB保存成功");
        return res.json({ code: 1, msg: "注册成功" });
      })
      .catch(err => {
        console.log("UserDB保存失败");
        return res.json({ code: 0, msg: "网络请求失败" });
      });
  });
});

module.exports = Router;
