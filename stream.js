//data stream  if data is large don't grab at once
const fs = require('fs');
//meaning of chunks Reading it in chunks (stream): You tear out a few pages at a time. Each "few pages" is a chunk. You read those few pages, then tear out the next few pages, and so on. You're never holding the entire book.
//Okay, let's talk about streams in programming, especially in Node.js, in a simple way.

// What is a Stream?
// Imagine data not as one big block, but as a continuous flow of small chunks over time. That's essentially what a stream is.

// Analogy:

// A River or a Water Hose: Water flows through a hose. You don't get all the water at once; it comes out in a continuous flow, bit by bit. You can process that water as it arrives (e.g., fill a bucket, water plants).
// Corrected the file path
const rs = fs.createReadStream('./files/lorem.txt', { encoding: 'utf-8' });
const ws = fs.createWriteStream('./files/new-lorem.txt');

// Handle data chunks
/*
rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
});

// Handle the end of the read stream
rs.on('end', () => {
    ws.end(); // Close the writable stream
    console.log('File has been written successfully.');
});

// Handle errors for the read stream
rs.on('error', (err) => {
    console.error(`Error reading the file: ${err.message}`);
});

// Handle errors for the write stream
ws.on('error', (err) => {
    console.error(`Error writing to the file: ${err.message}`);
});
*/
rs.pipe(ws);//more effiecient 
//rs.pipe(ws) is a method that connects a Readable Stream (rs) to a Writable Stream (ws).

//Meaning:

//It essentially means: "Take all the data coming out of rs and automatically send it directly into ws."