var Phone = function(phoneNumber) {
  this.phoneNumber = phoneNumber;
};

Phone.prototype.send = function(recipientPhoneNumber, message) {
  return 'sending the message "'+ message +'" to the phone number ' + recipientPhoneNumber;
};


var SmartPhone = function(phoneNumber, email) { 
  Phone.call(this, phoneNumber);
  this.email = email;
};

SmartPhone.prototype = Object.create(Phone.prototype);


SmartPhone.prototype.send = function(recipientPhoneNumberOrEmail, message) { 
  if (typeof recipientPhoneNumberOrEmail === 'number'){
    return Phone.prototype.send.call(this, recipientPhoneNumberOrEmail, message);
   } else {
    return 'sending the message "' + message + '" to email ' + recipientPhoneNumberOrEmail;
  }
};


SmartPhone.prototype.constructor = SmartPhone;

var phone = new Phone(4843889684);
var momsNumber = 3116270985;
var message = 'hi im ok!';

var result = phone.send(momsNumber, message);
// console.log(result);

var smartPhone = new SmartPhone(4843889684, 'yx296@nyu.edu');
var momsEmail = 'cf119@hotmail.com';

var result2 = smartPhone.send(momsEmail, message);
var result3 = smartPhone.send(momsNumber, message);

console.log(result2);
console.log(result3);
