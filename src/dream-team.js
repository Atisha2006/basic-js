const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	let arr=[];
	if (Array.isArray(members)){   
		for( let item of members) {
		    if (typeof item == 'string'){
		        item = item.replace(/\s/g, "");
		        arr.push(item[0].toUpperCase());
		    }
		}
	}
    if (arr.length === 0){
        return false;
        
    } 
	return arr.sort().join("");	
};
