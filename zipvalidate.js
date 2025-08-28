// Russian postal code checker

function zipvalidate(postcode) {
  return (
    !isNaN(postcode) &&
    "05789".split("").every((i) => !postcode.startsWith(i)) &&
    postcode.length === 6
  );
}
