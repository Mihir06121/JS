// Write a function factorial that calculates the factorial of a positive integer. 

let factorial = (m) => { 

    if (m === 0)
   {
      return 1;
   }
    return m * factorial(m-1);
           
  }

console.log(factorial(8));