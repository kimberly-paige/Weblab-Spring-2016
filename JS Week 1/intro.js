// alert("Hello");

var message = "Hello";

var x = 27;
var temp = [14, 32, 36, 40];

var person = {
   first: "Kim",
   last: "Nelson",
   age: 20,
   address: {
      city: "Fort Collins",
      zip: 80526
   }
};


// if (person.address.zip===80526) {
//    console.log("Hello" + person.first);
// }

if (person.age >= 21 && person.age < 65) {
   console.log("Hello" + person.first);
} else if (person.age >= 65) {
   console.log("discount time");
} else {
   console.log("You must leave");
}
// console.log(person.address.city);
// console.log(temp[2]);


var lookup= {};

["abdegopq4690ADOPQ", "B8"].forEach(function(group, idx){
   group.spli("").forEach(function(char){
      lookup[char] = idx + 1;
   })
})


var lookup = {
   a: 1,
   b: 1,
   c: 0,
   d: 1,
   e: 1,
   f: 0,
   g: 0,
   h: 0,
   i: 0,
   j: 0,
   k: 0,
   l: 0,
   m: 0,
   n: 0,
   o: 1,
   p: 1,
   q: 1,
   r: 0,
   s: 0,
   t: 0,
   u: 0,
   v: 0,
   w: 0,
   x: 0,
   A: 1,
   B: 2,
   C: 0,
   D: 1,
   E: 0,
   F: 0,
   G: 0,
   H: 0,
   I: 0,
   J: 0,
   K: 0,
   L: 0,
   M: 0,
   N: 0,
   O: 1,
   P: 1,
   Q: 1,
   R: 1,
   S: 0,
   T: 1,
   U: 0,
   V: 0,
   W: 0,
   X: 0,
   Y: 0,
   Z: 0,
   1: 0;
   2: 0,
   3: 0,
   4: 0,
   5: 0,
   6: 1,
   7: 0,
   8: 2,
   9: 1,
   0: 1,
}

function countHoles(str) {
   var holeCount = 0;
   str.split("").forEach(function(char){
      if(lookup[char]) {
         holeCount += lookup[char];
      }
   })
}



switch (age) {
   case 21:
      console.log("I'm 21");
      break;
   case 24:
         console.log("I'm 24");
         break;
   case 30:
         console.log("I'm 30");
         break;
   default:
         console.log("I'm " + age);
         break;
}
