const { globalComponent } = require('./settings')

module.exports = function (plop) {
    plop.setGenerator('globalComponent', globalComponent);
  };
