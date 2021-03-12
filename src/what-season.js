const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
	if(!date){return "Unable to determine the time of year!"}

	if (Object.getPrototypeOf(date)  !== Date.prototype || date.getMonth !== Date.prototype.getMonth) {
	    throw new Error('Error');
	  }

    let seasonMonth = date.getMonth();
	if (2 <= seasonMonth && seasonMonth <= 4){ return "spring";}
	else if (5 <= seasonMonth && seasonMonth <= 7){ return "summer";}
	else if (8 <= seasonMonth && seasonMonth <= 10){ return "autumn";}
	else{ return "winter";}

};
