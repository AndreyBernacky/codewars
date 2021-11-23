function find_average(array) {
    if(array.length == 0){
      return 0;
    }else{
    var summ = 0;
    for(let i = 0; i < array.length; i++){
      summ += array[i];
      var average = summ/array.length;
    }
    }
    return average;
  }