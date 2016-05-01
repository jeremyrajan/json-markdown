const chalk = require('chalk');

const errHandler = (message, type) => {
  if (!message) {
    return;
  }
  switch (type) {
    case 'err':
      console.log(chalk.red(message));
      break;
    case 'warn':
      console(chalk.warn(message));
      break;
    default:
      console.log(chalk.blue(message));
      break;
  }
};

module.exports = errHandler;
