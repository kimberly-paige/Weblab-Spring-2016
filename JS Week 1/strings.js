//function command (variable name) this will flag function as high priority and will be hoisted to the top no matter where in the page
//get used to writing functions and giving them a name to make logistical sense

upperCaseFirstLetters("something to upper case");  //invokes, the object that the function applies to
upperCaseFirstLetters("output");
upperCaseFirstLetters("kim p nelson"); //this will form a loop first point, goes through function, then goes to second, goes through function, and so on

function upperCaseFirstLetters(aStr){
   var cleaned = aStr.trim();
   var words = cleaned.split(" ");
   var output = []; //[] means an array with nothing in it
   // return aStr.charAt(0).toUpperCase() + + aStr.substr(1).toLowerCase();
   for (var i = 0; i < words.length; i++) {   //do loop
      var word = words[i]; //naming index
      var upperCased = word.charAt(0).toUpperCase() + word.slice(1);//upper case first letter, + remaining characters in word
      output.push(upperCased); //pushing the upperCased Variable
   }
   // console.log(output.join(" "));
   console.log(output.join(" "));
   return output.join(" "); //joins indi
}
