const args = process.argv.slice(2);

for (let x of args) {
  if (x > 0 && isNaN(x) !== true) {
    setTimeout(() => {
      process.stdout.write('.');
    }, x * 1000);
  }
}