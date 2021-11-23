function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    var m = [];
    for(let i = 0; i < birds.length; i++){
      for(let j = 0; j < geese.length; j++){
        if(birds[i] == geese[j]){
            delete birds[i];
        }
      }
    }
    for(let i = 0; i < birds.length; i++){
        if(birds[i] != undefined){
            m.push(birds[i]) 
        }
    }
  return m
  }
