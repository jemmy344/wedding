// Function to pick the first words
export function pickFirstWords(hisName: string, herName: string) {
  const hisFirstWord = hisName.split(" ")[0];
  const herFirstWord = herName.split(" ")[0];
  return { hisFirstWord, herFirstWord };
}

// Function to pick the first letters
export function pickFirstLetters(hisName: string, herName: string) {
  const hisFirstLetter = hisName.charAt(0);
  const herFirstLetter = herName.charAt(0);
  return { hisFirstLetter, herFirstLetter };
}

export const getTitleFormat = (hisName:string, herName:string) => {
    const names = pickFirstWords(hisName, herName);
    return `${names.hisFirstWord} & ${names.hisFirstWord}`
}
export const getInitials = (hisName:string, herName:string) => {
    const names = pickFirstLetters(hisName, herName);
    return `${names.hisFirstLetter}${names.herFirstLetter}`
}


