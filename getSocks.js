// 80's Kids #3: Punky Brewster's Socks

function getSocks(name, socks) {
  if (name === "Punky") {
    const set = [...new Set(socks)];
    return set.length > 1 ? set.slice(0, 2) : [];
  } else {
    return socks.filter(
      (sock, i) => socks.indexOf(sock) !== socks.lastIndexOf(sock)
    );
  }
}
