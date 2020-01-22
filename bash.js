// Output a prompt
let pwd = require('./pwd');
let ls = require('./ls');

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user tyoes in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline
    if(cmd === 'pwd'){
        pwd();
    } else if(cmd === 'ls'){
        ls();
    }
});