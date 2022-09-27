const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////
stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (!isNaN(key)) {
    process.stdout.write(`\rsetting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000);
  }
  if (key === '\u0003') {
    process.stdout.write("\nThank you for using me, ciao!\n");
    process.exit();
  }
});