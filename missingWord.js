// Jenny is 9 years old. She is the youngest detective in North America. Jenny is a
// 3rd grader student, so when a new mission comes up, she gets a code to decipher
// in a form of a sticker (with numbers) in her math notebook and a comment
// (a sentence) in her writing notebook. All she needs to do is to figure out one word,
// from there she already knows what to do. And here comes your role -
// you can help Jenny find out what the word is!

// In order to find out what the word is, you should use the sticker
// (array of 3 numbers) to retrive 3 letters from the comment (string)
// that create the word.

// Each of the numbers in the array refers to the position of a letter in the string,
// in increasing order.
// Spaces are not places, you need the actual letters. No spaces.
// The returned word should be all lowercase letters.
// if you can't find one of the letters using the index numbers, return
// "No mission today". Jenny would be very sad, but that's life... :(
// Example: input: [5, 0, 3], "I Love You" output: "ivy" (0 = "i", 3 = "v", 5 = "y")

function missingWord(nums, str) {
  nums = nums.sort((a, b) => a - b);
  str = str.replaceAll(" ", "").toLowerCase().split("");
  const outerIndex = nums.filter((i) => i > str.length).join("");
  if (outerIndex) return "No mission today";

  const char1 = str[nums[0]];
  const char2 = str[nums[1]];
  const char3 = str[nums[2]];
  return char1 + char2 + char3;
}
