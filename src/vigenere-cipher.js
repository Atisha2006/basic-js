const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(direct) { this.direct = direct; }

  encrypt(message, key) {
  	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V" ,"W", "X", "Y", "Z"];
  	if (!message || !key ){
	  throw new Error('ERROR');
	}

	String(message);
	String(key);
	let messageArr = message.toUpperCase().split("");
	let keyArr = key.toUpperCase().split("");
	let keyd = keyArr;
	while( keyArr.length < messageArr.length ){ 
			keyArr = keyArr.concat(keyd);
	}
	let i = -1;
	let messageStr = messageArr.map((item, index) => {
        if (alphabet.includes(item)){
          i++;
		  return (alphabet[(alphabet.indexOf(item) + alphabet.indexOf(keyArr[i]))%26]);
        } else { return item;}
	});
	if (this.direct === false) {
		return messageStr.reverse().join("");
	} else{ return messageStr.join("");}
  }   

  decrypt(encryptedMessage, key) {
  	let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V" ,"W", "X", "Y", "Z"];
  	if (!encryptedMessage || !key ){
	  throw new Error('ERROR');
	}
	String(encryptedMessage);
	String(key);
	let encryptedMessageArr = encryptedMessage.toUpperCase().split("");
	let keyArr = key.toUpperCase().split("");
	let keyd = keyArr;
	while( keyArr.length < encryptedMessageArr.length ){ 
			keyArr = keyArr.concat(keyd);
	}
	let i = -1;
	let encryptedMessageStr = encryptedMessageArr.map((item, index) => {
        if (alphabet.includes(item)){
          i++;
		  return (alphabet[((alphabet.indexOf(item) - alphabet.indexOf(keyArr[i]))+26)%26]);
        } else { return item;}
	});
	if (this.direct === false) {
		return encryptedMessageStr.reverse().join("");
	} else{ return encryptedMessageStr.join("");}
  }
}

module.exports = VigenereCipheringMachine;
