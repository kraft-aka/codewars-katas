// This is the first part of this kata series. Second part is here and third part is here

// Add two English words together!

// Implement a class Arith (struct struct Arith{value : &'static str,} in Rust) such that

//   //javascript
//   var k = new Arith("three");
//   k.add("seven"); //this should return "ten"
// Input - Will be between zero and ten and will always be in lower case

// Output - Word representation of the result of the addition. Should be in lower case

class Arith {
  constructor(value) {
    this.value = value;
  }

  mapToNum(value) {
    const numbers = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
    };
    console.log(numbers[value]);
    return numbers[value];
  }

  mapToStr(value) {
    const words = {
      0: "zero",
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six",
      7: "seven",
      8: "eight",
      9: "nine",
      10: "ten",
      11: "eleven",
      12: "twelve",
      13: "thirteen",
      14: "fourteen",
      15: "fifteen",
      16: "sixteen",
      17: "seventeen",
      18: "eighteen",
      19: "nineteen",
      20: "twenty",
    };
    return words[value];
  }

  add(nextValue) {
    const sum = this.mapToNum(this.value) + this.mapToNum(nextValue);
    return this.mapToStr(sum);
  }
}
