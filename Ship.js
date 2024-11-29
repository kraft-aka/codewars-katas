// OOP: Object Oriented Piracy

class Ship {
  constructor(draft, crew) {
    this.draft = draft;
    this.crew = crew;
  }

  isWorthIt = function () {
    let totalCrewWeight = this.crew * 1.5;
    return this.draft - totalCrewWeight > 20;
  };
}
