function countPositivesSumNegatives(input) {
  let count = 0;
  let sum = 0;
  let resarr = []
  
  console.log(input)

  if(input == undefined){

    console.log("enter")
    return resarr
  }else

  if(input.length == 0 || input == null){

    console.log("enter")
    return resarr
  }else {
  
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        count++
      } else 
        if(input[i] < 0){
        sum += input[i];
      }
    }

    resarr = [count, sum]

    console.log(resarr)
    
    return resarr
  }
}
//

function generateRange(min, max, step){
  let arr = []
  while(min <= max){
    
    arr.push(min)
    min += step
  }
  return arr
}

