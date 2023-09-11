const CryptoJS = window.cryptoJs;

function generateRandomKey(length) {
  // Create a string of all possible characters.
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456";
  // Generate a random key of the specified length.
  let key = "";
  for (let i = 0; i < length; i++) {
    // Get a random index from the characters string.
    const index = Math.floor(Math.random() * characters.length);
    // Add the character at the specified index to the key.
    key += characters[index];
  }
  return key;
}
var secretkey = generateRandomKey(32); //Length 32
console.log("SECRET KEY", secretkey);
var key = CryptoJS.enc.Utf8.parse(secretkey);
var iv = CryptoJS.enc.Utf8.parse(secretkey.substring(0, 16));
var plainText =
  '{"firstName": "Saurabh Gupta","email": "Saurabh.Gupta@gmail.com","address": {"addressLine1": "Noida City Center","city": "Noida","state": "UP","pincode": "411028","country": "India"' +
  ',"DOB": "2023-12-03"},"creditCardDetail": {"cardNumber": "1234567890123456","cvv": "123","expDate": "12/90","creditCardDetail1": ' +
  '{"cardNumber": "9875632245522","cvv": "123","expDate": "12/90"}}}'; /*-- Encryption --*/
var cipherText = CryptoJS.AES.encrypt(plainText, key, {
  iv: iv,
  mode: CryptoJS.mode.CBC,
  padding: CryptoJS.pad.Pkcs7
}).toString();
console.log("Encrypted Data " + cipherText); /*-- Decryption --*/
var decrypted = CryptoJS.AES.decrypt(
  "RQ/SEoGFF9IHmiMNbo/vlPTHuPWCGgDeEK5ZZBZjk/Kh5AIdgmVEeD42gciaK7gDKMP9odpjjZB/PGjebwpYSLzvEONS2jUiDtGPj7C0iNexmK5v5Gw9C8jsvqJdlmVK",
  key,
  { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }
);
//console.log("Decrypted Data " + decrypted.toString(CryptoJS.enc.Utf8));
