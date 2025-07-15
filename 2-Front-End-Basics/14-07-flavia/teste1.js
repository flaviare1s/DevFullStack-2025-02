function pigLatinTranslator(word) {
  const vowels = ["a", "e", "i", "o", "u", "y"];
  word = word.toLowerCase();

  let firstVowelIndex = -1;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      firstVowelIndex = i;
      break;
    }
  }

  if (firstVowelIndex === -1) {
    return word + "ay";
  }

  const prefix = word.slice(0, firstVowelIndex);
  const stem = word.slice(firstVowelIndex);

  return stem + prefix + "ay";
}

let word = "people";
let translated = pigLatinTranslator(word);
console.log(translated);
