// The input will be an array of dictionaries.

// Return the values as a string-seperated sentence in the order of their keys'
// integer equivalent (increasing order).

// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries'
// keys & values will always be strings and will always not be empty.

// Example
// Input:
// List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//        ]

// Output:
// 'Vatsan took his dog for a spin'

function sentence(List) {
  let res = "";

  List.sort((a, b) => {
    const keyA = parseInt(Object.keys(a)[0], 10);
    const keyB = parseInt(Object.keys(b)[0], 10);
    return keyA - keyB;
  });

  for (let i = 0; i < List.length; i++) {
    const item = List[i];
    const value = Object.values(item);
    res += value[0] + " ";
  }

  return res.trim();
}
