
  function strCount(str, letter){  
    let count = 0;
    let arr = str.split('');
    
    for(let i = 0; i < arr.length; i++){
      arr[i] == letter ? count += 1 : count +=0;
    }
    
    return count
  }

  //

  function makeUpperCase(str) {
    return str.toUpperCase()
  }

  //

  function solution(a, b){
    return a.length < b.length ? a+b+a : b+a+b
  }

//

function findMultiples(integer, limit) {
  let sum = 0;
  let arr = [];
  do {
    sum +=integer;
    arr.push(sum);
  } while (sum+integer <= limit)
  return arr;
}

