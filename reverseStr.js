
// String Reversing, Changing case, etc.

  const reverseStr = (s) => {
  let result = '';
    for (let i = s.length-1; i>=0;i--) {
      if (s[i]=== s[i].toUpperCase()) {
        result += s[i].toLowerCase()
      } else {
        result+=s[i].toUpperCase()
      }
    }
    return result
  }
  
  [...s1].forEach(i=> {
    if (i=== i.toLowerCase()) {
      last += i.toUpperCase()
    } else {
      last += i.toLowerCase()
    }
  })
  return `${reverseStr(s2)}@@@${reverseStr(s1)}${last}`
}