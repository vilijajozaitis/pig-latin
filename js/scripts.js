// business logic
// var pigLatin = function(word) {
//   if ((word === "a","e","i","o","u") && (year % 100 !== 0) || (year % 400 === 0)) {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// // user interface logic
$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
//     var pigLatin =""
//     var word = str + "way";
//     var result = pigLatin(year);
//
//     $(".word").text(word);
//
//     if (!result) {                 // same as writing if (result === false)
//       $(".not").text("not");
//     } else {
//       $(".not").text("");
//     }
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
console.log()
// test here
translatePigLatin("consonant");

    $("#result").show();
  });
});
