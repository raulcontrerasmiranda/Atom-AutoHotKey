const Declaration = require("../lib/declaration");

module.exports = [
  new Declaration("class", "class")
    .setSnippet(`class \${1:Name} {
  $2
}`)
    .setDescription("Create a class."),
  new Declaration("clext", "class...extends")
    .setSnippet(`class \${1:Name} extends \${2:Parent} {
  $3
}`)
    .setDescription("Create a class which extends another class"),
  new Declaration("global", "global")
    .setDescription("To refer to an existing global variable inside a function (or create a new one), declare the variable as global prior to using it."),
  new Declaration("static", "static")
    .setDescription("Static variables are always implicitly local, but differ from locals because their values are remembered between calls.")
];
