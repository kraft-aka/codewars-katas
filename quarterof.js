// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


function quarterOf (month){
  // Your code here
  var one = [1,2,3];
  var two = [4,5,6];
  var three = [7,8,9];
  var four = [10,11,12];

  if (one.includes(month)) {
    return 1;
  } else if (two.includes(month)) {
    return 2;
  } else if (three.includes(month)) {
    return 3;
  } else {
    return 4;
  }
}
