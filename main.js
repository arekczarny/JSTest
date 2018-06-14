//FizzBuzz

// Prompt

for(let i = 1; i < 101; i++) {
    if(i % 3 === 0 && i % 5 !== 0) {
        console.log('Fizz');
    } else if (i % 5 === 0 && i % 3 !== 0) {
        console.log('Buzz');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else {
        console.log(i);
    }
}

// Szachownica
const space = ' ';
const hash = '#';
const newLine = '\n';
for(let i = 0; i < 8; i++) {
    //console.log('row' + i);
    let firstSign = i % 2 === 0 ? space : hash;
    for(let j = i; j < i+7; j++) {
        if(j % 2 === 0) {
            firstSign = firstSign + hash;
        } else {
            firstSign = firstSign + space;
        }
    }
    console.log(firstSign + newLine);
}
//let name = prompt('Enter name please!');
//console.log(name);
let readline = require("readline");
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Give feedback BBicz !! : ", function(answer) {
    console.log("Thank you Bicz for your valuable feedback : ", answer);
    rl.close();
    process.exit();
});