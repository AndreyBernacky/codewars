function reverseWords(str){
    let arr = str.split(" ");
    return arr.reverse().join(" ");
  }

  //

  function check(a, x) {
    let ch = false;
    for(let i = 0; i < a.length; i++){
      if(a[i] == x){
          ch = true;
        break;
      }
    }
    return ch;
  }

  function reverseList(list) {
    return list.reverse();
  }