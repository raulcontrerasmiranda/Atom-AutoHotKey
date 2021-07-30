const Thing = require("./thing");

class Directive extends Thing {

  constructor(name) {
    super();
    this.setType("directive");
    this.setIcon("#");
    this.setSnippet(name.replace(/^#/, ""));
    this.setDisplayText(name.split(" ")[0]);
  }

  matchesWith(str, line) {
    const s = line.replace(/^\s+/, "").split(" ")[0];
    return this.displayText.toLowerCase().startsWith(s.toLowerCase());
  }

}

module.exports = Directive;
