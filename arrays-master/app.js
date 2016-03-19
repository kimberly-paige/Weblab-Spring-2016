var fruits = ["apple","kiwi","oranges","strawberry","mango","kumquat"];
var moreFruits = ["raspberry", "Pineapple","grape"];

var otherFruit = ["Dragon Fruit", "Plum"];

var allFruits = fruits.concat(moreFruits);


console.log('JSON version: ', JSON.parse(JSON.stringify(allFruits)))

//allFruits.push(otherFruit.toString());

stringFruits = "apple,kiwi,oranges";


otherFruit.forEach(function(fruit){
  //var newLength = allFruits.push(fruit));

  console.log(allFruits.push(fruit));
});

console.log(allFruits.sort().reverse());
console.log('----')
console.log(allFruits.shift());
console.log('----');

// obscure CSV example
console.log('"'+stringFruits.split(',').join('","')+'"');




//console.log(getTheLength(fruits));

function getTheLength(a){
    return a.length
}
