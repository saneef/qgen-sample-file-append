/* eslint-env es6 */
const fs = require('fs');

const appendFile = function (path) {
  const contents = fs.readFileSync(path, 'utf8');
  return contents + '\n';
}

const uppercase = function (str) {
  return str.toUpperCase();
};

module.exports = {
  appendFile,
  uppercase
};
