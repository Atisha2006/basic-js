const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
	if (!Array.isArray(arr)){
		throw new Error('Error');
	}
	let myArr = Array.from(arr);
    myArr.forEach((item, i, array) => {
        item == "--discard-prev" ? (myArr[i-1] = null, myArr[i] = null):
		item == "--double-prev" ? ( i > 0 ? myArr[i] = myArr[i-1] : myArr[i]  = null):
		item == "--discard-next" ? ( i+1 ? (myArr[i]  = null, myArr[i+1] = null) : myArr[i]  = null):
		item == "--double-next" ? ( i+1 ? myArr[i]  = myArr[i+1] : myArr[i]  = null): null; 
	});
	return myArr.filter(val=> val != null);
};