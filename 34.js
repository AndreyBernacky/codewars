class SmallestIntegerFinder {
    findSmallestInt(args) {
      let min = args[0];
      for(let i = 0; i<args.length; i++){
        args[i]<min ? min = args[i] : min = min;
      }
      return min;
    }
  }

  function greet(name){
    let str = "Hello, how are you doing today?"
    
    return str.substr(0, 6) + ' ' + name + str.substr(6);
  }

  function boolToWord( bool ){
    return bool == true ? "Yes" : "No";
  }
  