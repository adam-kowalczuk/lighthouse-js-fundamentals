const howManyHundreds = function (bottles) {
  return Math.floor(bottles / 100);
}

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(100));
console.log(howManyHundreds(99));

