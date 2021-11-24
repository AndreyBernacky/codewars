function arrayPlusArray(arr1, arr2) {
    let sumarr = 0;
    let arr = arr1.concat(arr2);
    for(let i=0; i < arr.length; i++){
      sumarr += arr[i];
    }
    console.log(sumarr);
    return sumarr; 
  }

  function countSheeps(arrayOfSheep) {
    let sheep = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      arrayOfSheep[i] == true ? sheep += 1 : sheep += 0;
    }
    return sheep;
  }

  function stringToArray(string){

	return string.split(" ");

}

function updateLight(current) {
  
    switch(current){
        case "green":
        return "yellow";
        break;
        case "yellow":
        return "red";
        break;
        case "red":
        return "green";
        break;
    }
  
  }