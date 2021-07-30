const Thing = require("./thing");

class Operator extends Thing {

  constructor(name, keepCase) {
    super();
    this.setText(name);
    this.setIcon("!");
    this.keepCase = !!keepCase;
  }

  matchesWith(string) {
    let match;
    if (this.keepCase) {
      match = this.text;
    } else if (string[0].toLowerCase() === string[0]) {
      match = this.text.toLowerCase();
    } else {
      match = this.text.toUpperCase();
    }
    if (match.toLowerCase().indexOf(string.toLowerCase()) !== -1) {
      this.setText(match);
      return true;
    }
    return false;
  }

}

module.exports = Operator;
