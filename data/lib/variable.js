const Thing = require("./thing");

class Variable extends Thing {

  constructor(name) {
    super();
    this.setType("variable");
    this.setText(name);
    this.setIcon("A");
  }

  matchesWith(string) {
    return this.text.toLowerCase().startsWith(string.toLowerCase());
  }

}

module.exports = Variable;
