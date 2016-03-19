console.log("hello world");


function sayHello (word){
   console.log("hello " + word)
}


//Method 1
var o = {};
o.name = "Kim";
o.address = "123 Main Street";
o.age = 32;
o.age +=5; //console log 37


//Method 2
var o2 = {
   name: "Kim", //string
   address: "123 Main Street",
   age: 19 + 30, //integer
   sayHello: function (){ //method
      console.log("hello, object method!!");
   },

   fruit: ["Apples", "Oranges", "Kiwis"] //array
};



o2.sayHello();

o2.age +=5; //command log 37

o2.name = "Ms " + o2.name + " Nelson"


var myArray = ["Apples", "Oranges", "Kiwis"];

console.log(myArray[0]); //Apples


console.log(o);
console.log(o2)

console.log("kim's age is ", o2.age)
sayHello("Kim");
