// altERnaTIng cAsE <=> ALTerNAtiNG CaSe

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((i) =>
      typeof i === "string" && i === i.toUpperCase()
        ? i.toLowerCase()
        : i.toUpperCase()
    )
    .join("");
};
