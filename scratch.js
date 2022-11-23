rl.question('Give me a number:', answer => {
    sum += parseInt(answer);
    numsLeft -= 1;

    console.log(`Your new sum is ${sum}. You have ${numsLeft} nums left.`);
        {
        rl.question('Give me a number:', answer => {
            sum += parseInt(answer);
            numsLeft -= 1;

            console.log(`Your new sum is ${sum}. You have ${numsLeft} nums left.`);
            rl.close();
            }}
    
    
    
    
    rl.close();