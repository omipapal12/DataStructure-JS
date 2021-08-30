let MAXCOUNT = 10;
    let count = 0;
    const number = [];
    
    while ( count < MAXCOUNT ) {
        number[count] = Math.floor ( Math.random() * 900) + 100;
        count++;
    }
    console.log("the 10 random 3 digit numbers are: " +number);
    
    let max = secondMax = number[1];
    let min = secondMin = number[1];
    
    for (i = 0; i < number.length; i++) {
        if ( number[i] > max ) {
            secondMax = max;
            max = number[i];
        }
        else if ( number[i] > secondMax && number[i] != max ) {
            secondMax = number[i];
        }
        if ( number[i] < min ) {
            secondMin = min;
            min = number[i];
        }
        else if ( number[i] < secondMin && number[i] != min ) {
            secondMin = number[i];
        }
    }
    //printing min and max values
    console.log("Second Max is: " +secondMax);
    console.log("Second Min is: " +secondMin);