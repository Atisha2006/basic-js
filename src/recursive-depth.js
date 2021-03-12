const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    m = 1; 
    calculateDepth(arr){
        if (arr.some(val => Array.isArray(val))){
            arr = arr.flat();
            this.m++;
            return this.calculateDepth(arr);
        }
        let res = this.m;
        this.m = 1;
        return res;
    }  
}