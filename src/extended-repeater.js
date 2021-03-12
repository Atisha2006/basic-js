const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
	let arr = [];
	let strArr = [];
	let def = {separator : '+',
        	additionSeparator : "|",
        	repeatTimes : 1,
            additionRepeatTimes : 1
	};
    for (let key in options) {
        key == "addition" ? def[key] = String(options[key]):  def[key] = options[key];
    }
    if(def.addition){
    	for( ; def.additionRepeatTimes>0; def.additionRepeatTimes--){
    		arr.push(String(def.addition));
    	}
    }
	let straddition = arr.join(def.additionSeparator);
	for(; def.repeatTimes>0; def.repeatTimes--){
		strArr.push(String(str) + straddition);
	}
	return strArr.join(def.separator);
};
  