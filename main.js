const vowels = "aeiouAEIOU";
let sentenceLength = 0;
let numberOfWords = 0;
let numberOfVowels = 0;

//The length of the sentence (the number of characters).
const length = (sentence) => {
  sentenceLength = sentence.split("").length;
  for (let char of sentence) {
    if (char == " ") {
      sentenceLength--;
    }
  }
  return sentenceLength;
};
console.log(length("hello everyone."));

//The number of words in the sentence (assuming that the words are separated by a single space).
const number = (sentence) => {
  numberOfWords = sentence.split(" ").length;
  return numberOfWords;
};
console.log(number("hello everyone."));

//The number of vowels in the sentence.
const vowel = (sentence) => {
  for (let char of sentence) {
    for (let vowel of vowels.split("")) {
      if (char == vowel) {
        numberOfVowels++;
      }
    }
  }
  return numberOfVowels;
};
console.log(vowel("hello everyone."));
