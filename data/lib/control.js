const Thing = require("./thing");

class Control extends Thing {

  constructor(shortcut, full) {
    super();
    this.setType("control");
    this.setIcon("C");
    this.setRightLabel(shortcut);
    this.setDisplayText(full);
    this.setSnippet(full);
    this.shortcut = shortcut;
  }

  matchesWith(word) {
    const str1 = this.shortcut,
    str2 = this.displayText;
    return str1
      .toLowerCase()
      .startsWith(word.toLowerCase())
      || str2.toLowerCase().indexOf(word.toLowerCase()) !== -1;
  }

}

module.exports = Control;
