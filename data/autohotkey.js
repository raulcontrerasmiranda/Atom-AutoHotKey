const functions = require("./types/functions"),
  directives = require("./types/directives"),
  operators = require("./types/operators");

module.exports = functions
  .concat(directives)
  .concat(operators);
