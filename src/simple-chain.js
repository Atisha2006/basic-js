const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr : [],
  getLength() {
    return this.chainArr.length;
  },
  addLink(value) {
    this.chainArr.push("" + value);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position > this.chainArr.length ){
      this.chainArr = [];
      throw new Error('Error');
    } 
    this.chainArr.splice(position-1,1);
    return this;
  },
  reverseChain() {
    this.chainArr.reverse();
    return this;
  },
  finishChain() {
    let str = this.chainArr.join(" )~~( ");
    this.chainArr = [];
    return "( " + str + " )";
  }
};

module.exports = chainMaker;
