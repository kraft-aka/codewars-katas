// Simple elevator

function goto(level, button) {
  const levels = [0, 1, 2, 3];
  const btns = ["0", "1", "2", "3"];
  if (typeof level != "number" || typeof button != "string") return 0;
  if (!levels.includes(level) || !btns.includes(button)) return 0;
  return Number(button) - level;
}
