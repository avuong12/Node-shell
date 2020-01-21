// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user tyoes in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline
    const pwd = process.cwd();

    process.stdout.write(pwd);

    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});


