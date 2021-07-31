const data = require("../data/autohotkey");

class Provider {

  constructor() {

    this.selector = ".source.atom-ahk";
    this.disableForSelector = ".source.atom-ahk .comment";
    this.inclusionPriority = 1;
    this.suggestionPriority = 2;
    this.filterSuggestions = false;

  }

  getSuggestions(options) {
    const {editor, bufferPosition} = options,
      prefix = this.getPrefix(editor, bufferPosition),
      suggestions = [],
      word = this.getCurrentWord(prefix);
    if (word === "") return;
    for (const item of data) {
      if (item.matchesWith(word, prefix)) {
        suggestions.push(item);
      }
    }
    return suggestions;
  }

  getPrefix(editor, bufferPosition) {
    const line = editor.getTextInRange([[bufferPosition.row, 0], bufferPosition]);
    return line;
  }

  getCurrentWord(line) {
    const split = line.split(" "),
      last = split[split.length - 1];
    return last.replace(/^[(){}[\]]|[(){}[\],:]$/g, "");
  }

}

module.exports = Provider;
