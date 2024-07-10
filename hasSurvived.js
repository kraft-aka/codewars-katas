// Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

// CONDITIONS

// Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
// If the value is the same they both perish
// If one of the values is empty(different array lengths) the non-empty value soldier survives.
// To survive the defending side must have more survivors than the attacking side.
// In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
// The initial attack power is the sum of all the values in each array.

function hasSurvived(attackers, defenders) {
  const damageA = attackers.reduce((a, b) => a + b, 0);
  const damageB = defenders.reduce((a, b) => a + b, 0);

  let survivorA = 0;
  let survivorB = 0;

  const maxLength = Math.max(attackers.length, defenders.length);

  for (let i = 0; i < maxLength; i++) {
    const attacker = attackers[i] || 0;
    const defender = defenders[i] || 0;

    if (attacker > defender) {
      survivorA++;
    } else if (attacker < defender) {
      survivorB++;
    }
  }

  if (survivorB > survivorA) {
    return true;
  } else if (survivorB < survivorA) {
    return false;
  } else {
    return damageB >= damageA;
  }
}
