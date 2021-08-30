//declare map to store birth months
let birthMonthMap = new Map();
//initialize array
for(let i = 1 ;i <= 12 ; i++){
    birthMonthMap.set(i,0);
}
//store month as key and number of people born on that month as value in map
for (let i=1 ; i<=50 ;i++ ) {
    let month = Math.floor(Math.random() * 100%12) + 1;
    let individualCount = birthMonthMap.get(month);
    birthMonthMap.set(month,++individualCount); 
}
console.log(birthMonthMap);
console.log("Months of year :- ");
for (let key of birthMonthMap.keys()) {
	process.stdout.write(key+" ");
}
console.log("\nNo. of people having birth months in same year :- ");
for (let value of birthMonthMap.values()) {
	process.stdout.write(value+" ");
}