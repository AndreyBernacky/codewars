function howMuchILoveYou(nbPetals) {
    let petalRealNum = nbPetals % 6;
  
    switch(petalRealNum){
        case 0: 
        return "not at all";
        break;
        case 1:
        return "I love you";
        break;
        case 2:
        return "a little";
        break;
        case 3:
        return "a lot";
        break;
        case 4:
        return "passionately";
        break;
        case 5:
        return "madly";
        break;
    }
}

