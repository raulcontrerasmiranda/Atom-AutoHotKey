const functions = require("./types/functions"),
  directives = require("./types/directives"),
  operators = require("./types/operators"),
  variables = require("./types/variables"),
  declarations = require("./types/declarations"),
  controls = require("./types/controls");

module.exports = functions
  .concat(directives)
  .concat(operators)
  .concat(variables)
  .concat(declarations)
  .concat(controls);
