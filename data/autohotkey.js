const functions = require("./types/functions"),
  directives = require("./types/directives"),
  operators = require("./types/operators"),
  variables = require("./types/variables");

module.exports = functions
  .concat(directives)
  .concat(operators)
  .concat(variables);
