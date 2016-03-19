var express = require('express');
var app = express();
var ejs = require('ejs');


app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  data = {
    properties: properties,
    pageTitle: "Properties index!"
  }
  var html ="<ul>";




  properties.forEach(function(property){
    html += "<li>"+ proprety.ownerName +"</li>";
  });
  //res.render('index',{data: data});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

console.log('hi');


var properties = [
  {
    ownerName: "David Jones",
    address: "123 Main Street"
  },
  {
    ownerName: "Bob Johnson",
    address: "345 Einsenhower Blvd"
  },
  {
    ownerName: "Mary Smith",
    address: "678 Spruce St."
  }
];


console.log(properties);
