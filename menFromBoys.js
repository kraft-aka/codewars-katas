// Input >> Output Examples:
// menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3})
// Explanation:
// Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .

// menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
// Explanation:
// Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending
// order *, then the odds in descending
// order { -99 }

// Since , (Duplications are not included when separating) , then you can see only one
// (-99) was appeared in the final array/list .

function menFromBoys(arr) {
  const even = [
    ...new Set(arr.filter((i) => i % 2 === 0).sort((a, b) => a - b)),
  ];
  const odd = [
    ...new Set(arr.filter((i) => i % 2 !== 0).sort((a, b) => b - a)),
  ];
  return even.concat(odd);
}
