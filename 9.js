// Write a function findRepeat that very first charecter that repeats in a given string.
// It should return the repeated character, else if no characters are repeated it should return null.

let findRepeat = (str) => {
    for (let ch of str) {
        if(str.indexOf(ch) !== str.lastIndexOf(ch)) {
          return ch;
        }
    }
    return null;
}
console.log(findRepeat("akshayasa"));