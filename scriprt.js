const https = require('https');
const fs = require('fs');

const url = 'https://raw.githubusercontent.com/4nth0nyl1MHC/UK-Scanning-Directory-2019/77136ccadea675af2345a40a0287f93ebe40e51f/UK%20Scanning%20Directory%20-%20January%202019/Various%20Misc%20Files/UK%20Airports%202019%20(VHF%20%26%20UHF)/London%20Swanwick%20Control%202017.txt';

https.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(`The file has ${data.split('\n').length} lines.`);
    
    // write the file in reverse order
    const reversedContent = data.split('').reverse().join('');
    fs.writeFile('reversed_file.txt', reversedContent, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  });
}).on('error', (err) => {
  console.log(`Error: ${err.message}`);
});