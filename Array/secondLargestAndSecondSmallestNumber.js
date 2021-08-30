let MAXCOUNT = 10;
 let count = 0;
 let temp = 0;
 const number = [];
 
 while ( count < MAXCOUNT ) {
     //generating 10 random 3 digit numbers
     number[count] = Math.floor ( Math.random() * 900) + 100;
     count++;
 }
 console.log("Random numbers are: " +number);
 
 for ( i = 0; i < MAXCOUNT ; i++ ) {
     for ( j = i; j < MAXCOUNT; j++ ) {
         if ( number[i]  > number[j] ) {
             temp = number[i];
             number[i] = number[j];
             number[j] = temp;
         }
     }
 }
 console.log("Sorted Numbers " +number);
 
 for ( i = 0; i < number.length; i++ ) {
     console.log("Second minimum value is: " +number[i+1]);
     console.log("Second maximum value is: " +number[number.length - 2]);
     break;
 }