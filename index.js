const encryptPassword = require("./encrypter");
const decryptPassword = require("./decrypter");

const password = "YourSuperSecretPassword";

// Encrypt the password
const encryptedData = encryptPassword(password);
console.log("Encrypted:", encryptedData);

// Decrypt the password
const decryptedPassword = decryptPassword(
  encryptedData.encryptedPassword,
  encryptedData.iv,
  encryptedData.key
);
console.log("Decrypted Password:", decryptedPassword);
