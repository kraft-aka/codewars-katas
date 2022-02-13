// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
// The output should be two capital letters with a dot separating them.
//
// It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F



function abbrevName(name){

  //convert string to array
  var listName = name.split(" ");

  //retrive first charachters from the arrya's items and capitalize
  var first = listName[0][0].toUpperCase();
  var second = listName[1][0].toUpperCase();

  // concatinate them and return
  return first + "." + second;

  }
