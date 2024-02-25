// Trilingual democracy
// Switzerland has four official languages: German, French, Italian, and Romansh.1

// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for
// the group.2 Here are the rules for groups of exactly three3 people:4

// When all three are native speakers of the same language, it also becomes their group's language.5a

// When two are native speakers of the same language, but the third person speaks a different language, all three will
// converse in the minority language.5b

// When native speakers of three different languages meet, they eschew these three languages and instead use the remaining
// of the four official languages.5c

// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

// Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8

// Examples:9

// The language for a group of three native French speakers is French: FFF → F

// A group of two native Italian speakers and a Romansh speaker converses in Romansh: IIK → K

// When three people meet whose native languages are German, French, and Romansh, the group language is Italian: DFK → I

function trilingualDemocracy(languages) {
  const languageCounts = { D: 0, F: 0, I: 0, K: 0 };

  languages.split("").forEach((language) => {
    languageCounts[language]++;
  });

  const countArray = Object.values(languageCounts);
  const uniqueLanguages = countArray.filter((count) => count > 0).length;

  if (uniqueLanguages === 1) {
    return languages[0];
  } else if (uniqueLanguages === 2) {
    const minorityLanguage =
      countArray.indexOf(1) !== -1
        ? countArray.indexOf(1)
        : countArray.lastIndexOf(1);
    return Object.keys(languageCounts)[minorityLanguage];
  } else {
    return Object.keys(languageCounts).find(
      (language) => languageCounts[language] === 0
    );
  }
}
