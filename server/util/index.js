const utils = require("utility");

exports.MD5Password = password => {
  const salt = "react_redux_router_hjklLOHF~~!@#$%^&*";
  return utils.md5(utils.md5(password + salt));
};
