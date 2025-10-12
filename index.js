const fs =require('node:fs')
// task ; Read the constent of the text.txt file
console.log('Start of the script')
// this Sunc => Blocking Operation
const content=fs.readFileSync('text.txt','utf-8')
console.log(content)


// Async => Non-Blocking Operation
fs.readFile('text.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data)
})


// how js internaly works abnd his architecture of event loop
console.log('End of the script')

// Event lop and Call back Queue

// task ; Write the content to output.txt file
fs.writeFileSync
('output.txt','Hello, this is a test file.'     )
console.log('File written successfully.')


// Thread Pool 
Worker.apply(this, tasks);
fs.writeFileSync
('output.txt','Appending new content.\n',{flag:'a'}     )
console.log('Content appended successfully.')

// task ; Create a new directory
fs.mkdir('newDir', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('Directory created successfully.');
});
