"use strict";

// 1
const usersMsg = (message, seconds) => {
  setInterval(() => {
    console.log(message);
  }, seconds * 1000);
};

// usersMsg("hey", 2);

// 2
const myArray = ["hello", "0", false, 21, null];
const string = (array) => {
  let newArr = array.filter((el) => typeof el === "string");
  return newArr;
};

console.log(string(myArray));

// 3
const myObj = {
  age: 20,
  name: "geek",
  grades: "b",
  zipCode: 60013,
};

const lengthOfObj = (object) => Object.keys(object).length;

console.log(lengthOfObj(myObj));

// 4
const reverseNum = (num) => {
  let reversedNum;
  if (num >= 0) {
    reversedNum = num.toString().split("").reverse().join("");
  } else {
    reversedNum = num.toString().split("").slice(1).reverse().join("") * -1;
  }
  return parseInt(reversedNum);
};

console.log(reverseNum(-12));

// 5
const arrOfDigits = ["zero", "one", "two", "three", "four", "five"];

const oddIndex = (array) => {
  array.filter((el, index) => {
    if (index === 0) {
      console.log(el);
    } else if (index % 2 === 1) {
      console.log(el);
    }
  });
};
oddIndex(arrOfDigits);

const myTxt = "Hello World";
const setOfLetters = (txt) => {
  let mySet = new Set(txt.split(""));
  return mySet;
};
console.log(setOfLetters(myTxt));

const countLetters = (word) => {
  let newObj = {};
  for (let item of word.split(" ").join("").split("")) {
    if (!newObj[item]) {
      newObj[item] = 1;
    } else {
      newObj[item]++;
    }
  }
  return newObj;
};
console.log(countLetters(myTxt));
