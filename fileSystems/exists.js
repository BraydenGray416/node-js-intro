const fs = require('fs');

if (fs.existsSync('message.txt')) {
  console.log('The file exists.');
}
