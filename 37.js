function testEven(n) {
    return n % 2 == 0 ? true : false;
}

//

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

//

function paperwork(n, m) {
    if(n < 0 || m < 0){
      return 0
    } else
      return n * m;
  }

  //

  function compareNumbers(a, b) {
    return a - b;
  }
  
  var min = function(list){
      
    list = list.sort(compareNumbers);
    
      return list[0];
  }
  
  var max = function(list){
      list = list.sort(compareNumbers);
      return list[list.length-1];
  }

  //

  function greet (name, owner) {
    return name == owner ? "Hello boss" : "Hello guest";
  }

  //

  function basicOp(operation, value1, value2)
{
  switch(operation){
      case "+":
      return value1 + value2;
      break;
      case "-":
      return value1 - value2;
      break;
      case "*":
      return value1 * value2;
      break;
      case "/":
      return value1 / value2;
      break;
  }
  
}