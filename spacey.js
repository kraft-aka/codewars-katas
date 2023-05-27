// Kevin is noticing his space run out! 
// Write a function that removes the spaces from the values and returns 
// an array showing the space decreasing.
// For example, running this function on the array ['i', 'have','no','space'] 
// would produce ['i','ihave','ihaveno','ihavenospace']

function spacey(array){
 
  let arr= []
  let temp = array[0]
  for (let i = 0; i < array.length; i++) {
    arr.push(temp)
    temp = temp + array[i+1]
  }
  return arr;
}

console.log(spacey(['i', 'have','no','space']));