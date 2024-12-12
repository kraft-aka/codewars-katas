// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.

// Task
// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

// Examples
// 25 is an automorphic number, because
// 2
// 5
// 2
// =
// 625
// 25
// 2
//  =625 ends with 25, so return "Automorphic".
// 13 is not an automorphic number, because
// 1
// 3
// 2
// =
// 169
// 13
// 2
//  =169 does not end with 13, so return "Not!!".
// 76 is an automorphic number, because
// 7
// 6
// 2
// =
// 5776
// 76
// 2
//  =5776 ends with 76, so return "Automorphic".
// 225 is not an automorphic number, because
// 22
// 5
// 2
// =
// 50625
// 225
// 2
//  =50625 does not end with 225, so return "Not!!".
// 625 is an automorphic number, because
// 62
// 5
// 2
// =
// 390625
// 625
// 2
//  =390625 ends with 625, so return "Automorphic".
// 1 is an automorphic number, because
// 1
// 2
// =
// 1
// 1
// 2
//  =1 ends with 1, so return "Automorphic".

function automorphic(n) {
  return String(n ** 2).endsWith(String(n)) ? "Automorphic" : "Not!!"; // your code here
}
