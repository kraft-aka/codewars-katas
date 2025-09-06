// UniDecoder

function uniDecoder() {
  const args = [...arguments];
  const has = args.filter((i) => !isNaN(parseInt(i)));
  return (
    has.map((i) => String.fromCharCode(i)).join("") ||
    "not a valid character code"
  );
}
