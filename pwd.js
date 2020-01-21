process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  const pwd = process.cwd();
  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
});

module.exports=function (data) {
  const pwd = process.cwd();
  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
};

