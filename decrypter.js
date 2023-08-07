const crypto = require("crypto");
const CryptoJS = require("crypto-js");

function decryptPassword(encryptedPassword, iv, key) {
  const algorithm = "aes-256-cbc";

  const decipher = crypto.createDecipheriv(
    algorithm,
    Buffer.from(key, "hex"),
    Buffer.from(iv, "hex")
  );
  let decrypted = decipher.update(encryptedPassword, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}

module.exports = decryptPassword;
