import { prompt } from "./prompt.js";

const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = LOWERCASE.toUpperCase();
const SPECIALS = "!@#$%^&*()";
const NUMBERS = "0123456789";

const askPasswordLength = () => {
  let length = Number(prompt("How many characters ? (8-36)"));
  if (length < 8 || length > 36 || Number.isNaN(length)) {
    console.log("Please enter a valid number");
    return askPasswordLength();
  }
  return length;
};

const askSpecialChars = () => {
  let specialChars = prompt("Do you want special characters ? (y/n)");
  if (specialChars === "y") {
    return true;
  } else if (specialChars === "n") {
    return false;
  } else {
    console.log("Please enter a valid answer");
    return askSpecialChars();
  }
};

const askNumbers = () => {
  let numbers = prompt("Do you want numbers ? (y/n)");
  if (numbers === "y") {
    return true;
  } else if (numbers === "n") {
    return false;
  } else {
    console.log("Please enter a valid answer");
    return askNumbers();
  }
};

const askUppercase = () => {
  const upperCase = prompt("Do you want uppercase characters ? (y/n)");
  if (upperCase === "y") {
    return true;
  } else if (upperCase === "n") {
    return false;
  } else {
    console.log("Please enter a valid answer");
    return askUppercase();
  }
};

const generatePassword = (length, specialChars, numbers, upperCase) => {
  let charset = LOWERCASE;
  if (specialChars) {
    charset += SPECIALS;
  }
  if (numbers) {
    charset += NUMBERS;
  }
  if (upperCase) {
    charset += UPPERCASE;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }
  return password;
};

const main = () => {
  const length = askPasswordLength();
  const specialChars = askSpecialChars();
  const numbers = askNumbers();
  const upperCase = askUppercase();
  const password = generatePassword(length, specialChars, numbers, upperCase);
  console.log(`Here is your generated password : ${password}`);
};

main();
