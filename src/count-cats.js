const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
    return array.flat().filter(item => item =="^^").length;
};
