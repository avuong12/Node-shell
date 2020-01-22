module.exports = function pwd () {
  const cwd = process.cwd();
  process.stdout.write(cwd + "\n");
  process.stdout.write('prompt > ');
}