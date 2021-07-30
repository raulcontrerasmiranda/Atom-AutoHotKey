const Declaration = require("../lib/declaration");

module.exports = [
  new Declaration("class", "class")
    .setSnippet(`class \${1:Name} {
  $2
}`),
  new Declaration("clext", "class...extends")
    .setSnippet(`class \${1:Name} extends \${2:Parent} {
  $3
}`),
  new Declaration("global", "global"),
  new Declaration("static", "static")
];
