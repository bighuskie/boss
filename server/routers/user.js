const express = require("express");
const Router = express.Router();
const UserDB = require("../models/user");
const utils = require("../util/index");

Router.get("/register", (req, res) => {
  UserDB.find()
    .then(data => {
      return res.json({ code: 1, data });
    })
    .catch(err => {
      console.log("UserDB出错了");
    });
});

/**
 * 用户注册逻辑
 */
Router.post("/register", (req, res) => {
  let { account, password, identity } = req.body;
  UserDB.findOne({ account }, (err, data) => {
    if (data) {
      //注册失败
      return res.json({ code: 0, msg: "用户名已存在" });
    }
    new UserDB({ account, password: utils.MD5Password(password), identity })
      .save()
      .then(() => {
        //注册成功
        console.log("UserDB保存成功");
        return res.json({ code: 1, msg: "注册成功" });
      })
      .catch(err => {
        console.log("UserDB保存失败");
        return res.json({ code: 0, msg: "网络请求失败" });
      });
  });
});

/**
 * 用户登录逻辑
 */
Router.post("/login", (req, res) => {
  const { account, password } = req.body;
  UserDB.findOne({ account, password: utils.MD5Password(password) })
    .then(data => {
      if (data) {
        //登录成功
        res.cookie("userId", data._id);
        return res.json({ code: 1, data });
      }
      //登录失败
      return res.json({ code: 1, msg: "用户不存在" });
    })
    .catch(err => {
      console.log("查询失败");
    });
});

Router.get("/info", (req, res) => {
  return res.json({ code: 0 });
});

module.exports = Router;
