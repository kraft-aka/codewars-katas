function process2Arrays(arr1, arr2) {
  let presentInBoth = 0;
  let presentInOne = 0;
  let elInArr1 = 0;
  let elInArr2 = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      presentInBoth++;
    } else {
      elInArr1++;
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!arr1.includes(arr2[i])) {
      elInArr2++;
    }
  }

  presentInOne = elInArr1 + elInArr2;
  return [presentInBoth, presentInOne, elInArr1, elInArr2];
}
