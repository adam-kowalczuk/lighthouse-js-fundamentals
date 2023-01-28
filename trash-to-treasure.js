const smartGarbage = function (trash, bins) {
  const keys = Object.keys(bins);
  for (let i of keys) {
    if (i === trash) {
      bins[i]++;
    }
  }
  return (bins);
};

console.log(smartGarbage("recycling", { waste: 4, recycling: 2, compost: 5 }));
console.log(smartGarbage("waste", { waste: 4, recycling: 2, compost: 5 }));
