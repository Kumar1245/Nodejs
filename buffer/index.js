// what is buffer in nodejs
// A Buffer in Node.js is a global object that provides a way to work with binary data directly. 
// It is used to handle raw binary data, such as files, network protocols, or any other type of binary data.
// Buffers are instances of the Buffer class, which is a subclass of the Uint8Array class in JavaScript.
// They allow you to read and write binary data in a more efficient way compared to regular JavaScript arrays or strings.

const { Buffer } = require('buffer');

const buf=Buffer.alloc(10); //allocating buffer of 10 bytes
console.log('Buffer of 10 bytes:',buf);
const bufstring=Buffer.from('Hello, Buffer!'); //creating buffer from string
console.log('Buffer from string:',bufstring);
console.log('Buffer as string:',bufstring.toString());

const buf2=Buffer.allocUnsafe(10); //allocating unsafe buffer of 10 bytes
console.log('Unsafe Buffer of 10 bytes:',buf2);

const buf3 =Buffer.alloc(10)
buf3.write('NodeJS'); //writing data to buffer
console.log('Buffer after writing data:',buf3);
console.log('Reading data from buffer:',buf3.toString('utf-8',0,6)); //reading data from buffer

const buf4=Buffer.concat([bufstring,buf3]); //concatenating buffers
console.log('Concatenated Buffer:',buf4);
console.log('Concatenated Buffer as string:',buf4.toString());

const buf5=Buffer.from('Hello, Buffer!');
console.log('Buffer equality check:',bufstring.equals(buf5)); //checking buffer equality

const buf6=buf5.slice(0,5); //slicing buffer
console.log('Sliced Buffer:',buf6);
console.log('Sliced Buffer as string:',buf6.toString());
const buf7 =Buffer.from("Chai");

console.log(buf7)