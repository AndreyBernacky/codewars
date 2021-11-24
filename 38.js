/*
function digitize(n) {
    str = String(n);
    let arr = []
    for(let i = 0; i < str.length; i++){
        arr.push(Number(str[i]));
    }
    return arr.reverse();
  }

  digitize(35231);
  */

  function abbrevName(name){

    let arr = name.split(" ");
    let abb = arr[0][0] + "." + arr[1][0];
  return abb.toUpperCase();

}

//

function booleanToString(b){
    return b == true ? 'true' : 'false';
  }

//

function invert(array) {
    let invarr = []
    for(let i = 0; i < array.length; i++){
      invarr.push(array[i]*(-1));
    }
     return invarr;
  }

  