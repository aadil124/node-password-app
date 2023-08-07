const crypto = require("crypto");
const CryptoJS = require("crypto-js");

function encryptPassword(password) {
  const algorithm = "aes-256-cbc";
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(password, "utf8", "hex");
  encrypted += cipher.final("hex");

  return {
    encryptedPassword: encrypted,
    iv: iv.toString("hex"),
    key: key.toString("hex"),
  };
}

module.exports = encryptPassword;
