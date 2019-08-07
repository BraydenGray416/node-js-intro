const fs = require('fs');

fs.appendFile('message.txt', '\n\ndata to append', (err) => {
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
