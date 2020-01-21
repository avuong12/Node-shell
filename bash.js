// Output a prompt
pwd=require('./pwd')
ls=require('./ls')



process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user tyoes in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline
    if(data==='pwd'){
        pwd()
    }
    if(data==='ls'){
        ls()
    }
    // const pwd = process.cwd();

    // process.stdout.write(pwd);

    // process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});


