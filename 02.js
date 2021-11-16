function even_or_odd(number) {
  let num = number;
  let result;
  if(num % 2 == 0){
    result = "Even";
  }
  else 
  result = "Odd";

  return result;
}

even_or_odd(4)