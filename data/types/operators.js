// Does not include operators like "-", "+", etc.

const Operator = require("../lib/operator");

module.exports = [
  new Operator("and"),
  new Operator("new"),
  new Operator("ByRef", true),
  new Operator("not"),
  new Operator("or")
];
