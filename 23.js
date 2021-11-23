function lovefunc(flower1, flower2){
    if((flower1 % 2 == 0 && flower2 %2 !=0) || (flower1 % 2 != 0 && flower2 %2 ==0)){
      return true;
    }else 
      return false;
  }

  //

  function litres(time) {
    return Math.trunc(time*0.5);
  }

  //

  function remainder(a, b){
  
    return a < b ? b % a : a % b;
    
  }

  //


function square(x){
    return Math.pow(x,2);
  }