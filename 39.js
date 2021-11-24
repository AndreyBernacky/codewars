function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      arr[i] < 0 ? sum += 0 : sum += arr[i];
    }
    return sum;
  }

  //

  function areYouPlayingBanjo(name) {
  
    return name[0] == "R" || name[0] == "r" ? name + " plays banjo" : name + " does not play banjo";
  }

  //

  function maps(x){
    let doubleArr = [];
      for(let i = 0; i < x.length; i++){
        doubleArr.push(x[i]*2);
      }
      return doubleArr; 
    
    }

//

var websites = []

for(let i = 0; i < 1000; i++){
  websites.push("codewars")
}

//

function getAverage(marks){
    let sum = 0;
    for(let i = 0; i < marks.length; i++){
      sum += marks[i];
    }
    let aver = sum/marks.length;
    
    return Math.trunc(aver)
  }

  //