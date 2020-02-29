let sum = (num) => { 
    let starting = 0;
    let sum = 0;
    let numString = num.toString(); 
    
    for (var i = starting; i < numString.length; i++) {
        sum += Number(numString[i]);
    }
    return sum;
}
console.log(sum(153));