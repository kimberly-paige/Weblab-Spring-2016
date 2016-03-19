var total = add(3,4);

if(canDrink(22)){       //code in this function would run because 22 > 21 which makes it TRUE
  console.log("cheers!");
}

function add(x, y){
  var sum = x + y; //OR return x + y;
  return sum;
}

function canDrink(age){
  if (age >= 21) {
    return true; //have to use return to pass value back
  } else {
    return false;
  }

var z = 3 // **dead code because function returns during if/else statement
}
