// Training JS #26: methods of arrayObject---map()

// isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
// isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
// isolateIt(["1234","56789"]) should return ["12|34","56|89"]

function isolateIt(arr) {
  return arr.map((i) => {
    if (i.length % 2 === 0) {
      const l = i.slice(0, i.length / 2);
      const r = i.slice(l.length);
      return `${l}|${r}`;
    } else {
      const l = i.slice(0, i.length / 2);
      const r = i.slice(l.length + 1);
      return `${l}|${r}`;
    }
  });
}
