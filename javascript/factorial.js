#factorial
const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
inp.on("line", (data) => {
fact=1
for(i=1;i<=data;i++)
fact=fact*i
console.log(fact)
});
