const readline = require("prompt-sync");
 const prompt=readline();
 

 let count = 0;
 let isPrime = 0;
 let result = [];
 let number = prompt("Enter any number to print its prime factors: ");
 
 for ( i = 2; i <= number; i++ ) {

     if ( number % i == 0) {
         isPrime = 1;
         
         for ( j = 2; j <= i / 2; j++) {

             if ( i % j == 0) {
                 isPrime = 0;
                 break;
             }
         }
         if ( isPrime == 1 ) {
             result [count] = i;
             count++;
         }
     }
 }
 if ( isPrime == 0 || isPrime == 1 ) {
     console.log(result);
 }