const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.json({ name: "react", type: "IT" });
});

app.listen(8080, function() {
  console.log("server running");
});
