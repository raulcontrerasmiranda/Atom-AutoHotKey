const Thing = require("./thing");

class Command extends Thing {

  constructor(snippet) {
    super();
    this.setType("command");
    this.setIcon("C");
    this.setDisplayText(snippet.split(",")[0]);
    this.setSnippet(snippet);
  }

}

module.exports = Command;
