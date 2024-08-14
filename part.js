// Given an array of terms, if any of those terms relate to Alan Partridge, return Mine's a Pint!

// The number of exclamation mark (!) after the t should be determined by the number of Alan related terms you find in the given array (x). The related terms are as follows:

// Partridge
// PearTree
// Chat
// Dan
// Toblerone
// Lynn
// AlphaPapa
// Nomad
// If you don't find any related terms, return Lynn, I've pierced my foot on a spike!!

function part(x) {
    const alanTerms = [
        "Partridge",
        "PearTree",
        "Chat",
        "Dan",
        "Toblerone",
        "Lynn",
        "AlphaPapa",
        "Nomad",
    ];
    const terms = x.filter((term) => alanTerms.includes(term)).length;
    const sign = "!".repeat(terms);
    return terms === 0
        ? "Lynn, I've pierced my foot on a spike!!"
        : `Mine's a Pint${sign}`;
}
