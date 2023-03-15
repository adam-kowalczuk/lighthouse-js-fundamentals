//REFACTORED CODE
const loopyLighthouse = function (range, multiples, words) {
  for (let num = range[0]; num <= range[1]; num++) {
    let output = "";
    if (num % multiples[0] === 0) {
      output += words[0];
    };
    if (num % multiples[1] === 0) {
      output += words[1];
    };
    console.log(output === "" ? num : output);
  }
};

//ORIGINAL CODE
// const loopyLighthouse = function (range, multiples, words) {
//   for (let i = range[0]; i <= range[1]; i++) {
//     if (i % multiples[0] === 0 && i % multiples[1] === 0) {
//       console.log(words[0] + words[1])
//     } else if (i % multiples[1] === 0) {
//       console.log(words[1]);
//     } else if (i % multiples[0] === 0) {
//       console.log(words[0]);
//     } else {
//       console.log(i);
//     }
//   }
// };

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

