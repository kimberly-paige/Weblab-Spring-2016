var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   // res.send("Hello World!");
   data = {
      properties: properties,
      pageTitle: "Properties Index!"
   }

   res.render("index", {data: data} );//pass data to a view
});

app.listen(3000, function(){
   console.log("Example app listening on port 3000.");
});



console.log("Hi");

var properties = [
   {
   ownerName:"David Jones",
   address: "123 Main Street",
   city: "Longmont",
   state: "Colorado"
   },
   {
   ownerName: "Bob Johnson",
   address: "345 Eisenhower Blvd",
   city: "Loveland",
   state: "Colorado"
   },
   {
   ownerName: "Mary Smith",
   address: "678 Spruce St",
   city: "Fort Collins",
   state: "Colorado"
   },
];



console.log(properties[0].ownerName);
