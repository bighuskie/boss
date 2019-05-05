const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/react-boss", {
  useNewUrlParser: true
});
const Schema = mongoose.Schema;

let userSchema = new Schema({
  account: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  create_time: {
    type: Date,
    default: Date.now
  },
  modified_time: {
    type: Date,
    default: Date.now
  },
  avater: {
    type: String,
    default:
      "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2427075743,3461514293&fm=26&gp=0.jpg"
  },
  identity: {
    type: String,
    required: true
  },
  //个人自我介绍
  intro: {
    type: String
  },
  //岗位
  job: {
    type: String
  },
  company: {
    type: String
  },
  money: {
    type: Number
  }
});

module.exports = mongoose.model("User", userSchema);
