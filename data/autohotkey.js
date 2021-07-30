const functions = require("./types/functions"),
  directives = require("./types/directives");

module.exports = functions
  .concat(directives);
