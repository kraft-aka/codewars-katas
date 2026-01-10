// Lat/Long Parser

function latLng(raw) {
  let cleanStr = raw.replace(/\s/g, "").split(",");
  const lt = cleanStr[0];
  const lg = cleanStr[1];
  const getValue = (str) => {
    const value = Math.abs(Number(str.replace(/[NWES]/i, "")));
    if (/S|W/i.test(str)) {
      return -value;
    }
    return value;
  };
  const lat = getValue(lt);
  const long = getValue(lg);
  return [lat, long];
}
