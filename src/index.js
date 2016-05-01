const parser = require('./tasks/parser');
const tokens = require('./tasks/tokens');
const Markdown = require('./generator/markdown');
const errHandler = require('./common/errHandler');
const path = require('path');
const fs = require('fs');

const process = (file, output, writeFile, callback) => {
  if (!file) {
    errHandler('No File, exiting!', 'err');
    return callback('No File', null);
  }
  const outputFile = output || `${path.basename(file).split('.')[0]}.md`;
  try {
    const schema = parser(file, tokens);
    const generator = new Markdown(tokens);
    schema.parse((err) => {
      if (err) {
        errHandler(err, 'err');
        return callback(err, null);
      }
      const mdOutput = generator.generate();
      if (writeFile) {
        fs.writeFileSync(`${outputFile}`, mdOutput); // creates a file and output
      }
      return callback(null, mdOutput); // returns an output
    });
  } catch (e) {
    errHandler(e, 'err');
    return callback(e, null);
  }
};

module.exports = process;
