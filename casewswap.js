// Given a string, swap the case for each of the letters.
//
// Examples
// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"


function swap(str){
  //split the string
  let getStr = str.split('');
  //console.log(getStr);

  // create new empty String
  let newStr = '';

  // Check the Case ofeach item in the array
  for (i = 0; i < getStr.length; i++) {
    if (getStr[i] === getStr[i].toUpperCase()) {
      newStr += getStr[i].toLowerCase();
    } else {
      newStr += getStr[i].toUpperCase();
    }
  }
  return newStr;
}
