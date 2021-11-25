function squareSum(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i]*numbers[i];
  }
  return sum
}
//
function greet(name){
  if(name == "Johnny")
    return "Hello, my love!";
  else 
    return "Hello, " + name + "!";
}
//
function main(verb, noun){
  return verb + noun
}
//

