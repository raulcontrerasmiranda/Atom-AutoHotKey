const Thing = require("./thing");

class Func extends Thing {

  constructor(name) {
    this.setType("function");
    this.setIcon("F");
    this.setSnippet(name);
    this.setDisplayText(name.split("(")[0]);
  }

}

module.exports = Func;
