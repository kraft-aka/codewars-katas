
// Create 10x10 array and randomly fill each cell with 'A', 'B', 'C' or 'D' and ensure that each row contain at least one occurance of each letter. Example: [ ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'B', 'B', 'C', 'B', 'D', 'A', 'A', 'C', 'D'], ['A', 'A', 'A', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['C', 'A', 'B', 'C', 'B', 'C', 'D', 'B', 'C', 'A'], ['A', 'A', 'B', 'D', 'B', 'B', 'A', 'C', 'B', 'A'], ['B', 'A', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'B'], ['A', 'A', 'D', 'C', 'A', 'D', 'B', 'C', 'C', 'C'], ['B', 'A', 'B', 'C', 'B', 'D', 'B', 'C', 'C', 'D'], ['D', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ['A', 'A', 'B', 'C', 'B', 'D', 'A', 'C', 'C', 'D'], ]



function array10() {
  const letters = ['A', 'B', 'C', 'D'];
  const res = Array.from({ length: 10 }, () => {

    let row = [...letters]
    while (row.length < 10) {
      row.push(letters[Math.floor(Math.random() * letters.length)])
    }
    row.sort(() => Math.random() - 0.5)
    return row
  }
  );
  return res
}