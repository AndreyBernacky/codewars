function fakeBin(x){
    let arr_new = Array.from(x).map( element => element < 5 ? 0 : 1).toString().replace(/,/g,"")
    console.log(arr_new)
        }

fakeBin('45385593107843568')