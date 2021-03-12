const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    let t, k;
	if (typeof sampleActivity !== 'string' || Number.isNaN(+sampleActivity)) {
	    return false;
 	}
  	if (0 < +sampleActivity && +sampleActivity <= MODERN_ACTIVITY){
		k = 0.693/HALF_LIFE_PERIOD;
		t = Math.ceil(Math.log(MODERN_ACTIVITY/+sampleActivity)/k);
	} else {return false;}
  return t;
}
