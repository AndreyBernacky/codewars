function twiceAsOld(dadYearsOld, sonYearsOld) {
  let count = 0;
  if(dadYearsOld/sonYearsOld > 2){
    while(dadYearsOld/sonYearsOld != 2){
      dadYearsOld++
      sonYearsOld++
      count++
    }
  }
  if(dadYearsOld/sonYearsOld < 2){
    while(dadYearsOld/sonYearsOld != 2){
      dadYearsOld--
      sonYearsOld--
      count++
    }
  }
  return count
}