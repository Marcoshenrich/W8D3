

const readLine = require("readline");
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout 

});


function addNumbers(sum, numsLeft,completionCB){

    if(numsLeft === 0){
        rl.close();
        completionCB(sum)
    }

    rl.question('Give me a number:', answer =>{
        sum += parseInt(answer);
        numsLeft -= 1;

        console.log(`Your new sum is ${sum}. You have ${numsLeft} nums left.`);
        addNumbers(sum, numsLeft, completionCB);

    });

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
