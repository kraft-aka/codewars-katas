// Give me data

function hasPermission(db, cat) {
  if (db.includes(cat + "_deny")) {
    return false;
  } else if (db.includes(cat + "_allow")) {
    return true;
  } else if (db.includes("*_deny")) {
    return false;
  } else if (db.includes("*_allow")) {
    return true;
  } else {
    return false;
  }
}
