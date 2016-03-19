var samples = [ 34, 18, 26, 44, 95];//defined samples

var total = 0;
var i;
for(i=0; i < samples.length; i++){ //loop parameters
   total += samples[i]; //will loop until condition above no longer satisfied (5)
   console.log(i, samples[i], total) //optional way to do line 10
}

console.log(total);
