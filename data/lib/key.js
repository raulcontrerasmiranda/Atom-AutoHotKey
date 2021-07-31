const Thing = require("./thing");

class Key extends Thing {

  constructor(key, description) {
    super();
    this.setType("key");
    this.setIcon("K");
    this.setText(key);
    this.setDescription(description);
  }

}

module.exports = Key;
