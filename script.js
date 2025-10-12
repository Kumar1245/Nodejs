const fs =require('node:fs')
const content=fs.readFileSync('text.txt','utf-8')
console.log(content)        

fs.writeFileSync
('output.txt','Hello, this is a test file.'     )
console.log('File written successfully.')
fs.writeFileSync
('output.txt','Appending new content.\n',{flag:'a'}     )
console.log('Content appended successfully.')

fs.mkdir('newDir', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created successfully.');
});

fs.readdir('.', (err, files) => {
    if (err) throw err;
    console.log('Files in current directory:', files);
});

fs.rmdirSync('newDir', { recursive: true });
console.log('Directory removed successfully.');

fs.unlinkSync('output.txt');
console.log('File deleted successfully.');