// Task
// Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

// {S:888, A:888, B:888, C:888, D:888, X:888}
// Grading rules:

// Grade S: Full marks(score=100)
// Grade A: score<100 and score>=90
// Grade B: score<90 and score>=80
// Grade C: score<80 and score>=60
// Grade D: score<60 and score>=0
// Grade X: score=-1(The cheating guy gets a score like that)

function countGrade(sc) {
  const s = sc.filter((g) => g === 100).length || 0;
  const a = sc.filter((g) => g < 100 && g >= 90).length || 0;
  const c = sc.filter((g) => g < 80 && g >= 60).length || 0;
  const d = sc.filter((g) => g < 60 && g >= 0).length || 0;
  const x = sc.filter((g) => g === -1).length || 0;
  const b = sc.filter((g) => g < 90 && g >= 80).length || 0;
  return { S: s, A: a, C: c, D: d, X: x, B: b };
}
