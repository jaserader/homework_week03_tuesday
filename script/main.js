//1. AVERAGE PRICE
var prices = items.map(function(avg){
  return avg.price;
})

console.log(prices);

var total = prices.reduce(function(total, current){
  return total + current;
});

console.log(total);

var numberItems = prices.length;

console.log(numberItems);

var avg = total/numberItems;

console.log(avg.toFixed(2));

//2.
var between = items.filter(function(element){
    return(element.price > 14.00 && element.price < 18.00);
})

console.log(between);

between.forEach(function(name){
  console.log(name);
})

//3.
var glassPitcher = items.filter(function(currency){
  return currency.currency_code === "GBP";
})

console.log(glassPitcher);
console.log(glassPitcher[0].title);

glassPitcher.forEach(function(name){
  console.log(name);
})

//4.
var wood = items.filter(function(test){
  return test.materials.indexOf('wood') != -1;
})

console.log(wood);

wood.forEach(function(name){
  console.log(name);
})

//5.
var moreMaterials = items.filter (function(test){
  return test.materials.length >= 8;
});

console.log(moreMaterials);

moreMaterials.forEach(function(name){
  console.log(name);
})

//6.
var sellersMade = items.filter (function(test){
  return test.who_made.indexOf('i_did') != -1;
});

console.log(sellersMade);

sellersMade.forEach(function(name){
  console.log(name);
})
