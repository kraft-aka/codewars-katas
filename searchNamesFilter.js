// Javascript filter - 3

function searchNames(logins) {
  return logins.filter((el, i) => {
    if (i % 2 === 1) {
      const user = logins[i - 1];
      return user.startsWith(".") || user.endsWith(".");
    }
  });
}
