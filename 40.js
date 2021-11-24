function isPalindrome(x) {
    let ispal = true;
    let len = x.length;
    for(let i = 0; i < x.length/2; i++){
      if(x[i].toUpperCase() == x[len - i-1].toUpperCase()){
        ispal = true
      } else {
        ispal = false;
        break;
        }
    }
    
    return ispal;
  }

  //

  function take(arr, n) {
    let resarr = [];
    if(arr.length == 0){
      resarr = [];
    } else 
      if(arr.length < n){
        resarr = arr;
      } else{
      for(let i = 0; i < n; i++){
        resarr.push(arr[i])
      }
    }
    return resarr
  }

  //

  function defineSuit(card) {
    let cardSym = card[card.length-1];
    switch(cardSym){
        case '♣':
        return 'clubs';
        break;
        case '♠':
        return 'spades';
        break;
        case '♦':
        return 'diamonds';
        break;
        case '♥':
        return 'hearts';
        break;
    }
  }

  //

  function hello(name) {
      console.log(name)
    let histr = "";
    if(name == "" || name == undefined){
      histr = "Hello, World!"
    } else {
      let newName = name.toLowerCase();
      
      let newName2 = newName[0].toUpperCase() + newName.slice(1);
      histr = "Hello, " + newName2 + "!";
    }
    console.log(histr)
    return histr 
  }

  hello()

  //

  function billboard(name, price = 30){
    let costs = 0;
    for(let i = 0; i < price; i++){
        costs += name.length
    }
    return costs;
  } 

