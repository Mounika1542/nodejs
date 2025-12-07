//chapter 2 write files we use common  core  ,module as file system the syntax to fs filesystem first 
//const fs=require('fs');
//fs.readFile('./files/starter.txt',(err,data)=>{//starter.txt: This is a physical text document, like a piece of paper with writing on it, stored on your computer's hard drive.
  //if(err) throw err;
  //console.log(data);
//}) //fs (file system module): This is like the tool (a pair of hands, a pen, a scanner) that Node.js uses to read from, write to, or manipulate that piece of paper.
//fs.readFile('./files/starter.txt', ...): This is the action of using the fs tool to "read the piece of paper named starter.txt located in the files folder."
//MAIN POINT
//starter.txt is a file.
//Node.js accesses it using the fs module. The fs module is a core, built-in part of Node.js that gives JavaScript programs the ability to perform file operations. It's not "calling" starter.txt as a module; it's using the module to read the content of the file.
//"it is not module only access the fs module kk"
//starter.txt what is this ,this is asscess a file odejs in file can be reable and charcter of strings 
//"it is not module only access the fs module kk"
//You are absolutely correct! starter.txt is not a module. It's just a regular file. Node.js (via the fs module) provides the functionality to access or interact with that file. The fs module is the tool, starter.txt is the target.

// "then it is keyword"
// No, starter.txt is not a keyword in JavaScript or Node.js.

// Keywords are reserved words that have a special meaning in a programming language and cannot be used for variable names, function names, etc. Examples in JavaScript include function, const, let, if, for, return, this, etc.
// starter.txt is simply a filename. It's a string of characters that identifies a file on your computer's file system.

// "why extenstion is txt"
// The .txt extension is a file extension. It's a convention used by operating systems (like Windows, macOS, Linux) and applications to indicate the type or format of the file's content.

// Here's why .txt is used:

// Indicates Plain Text: The most fundamental reason is to tell both humans and computers that the file contains plain, unformatted text. This means:

// No special fonts, colors, bolding, italics.
// No embedded images, videos, or other multimedia.
// No complex document structures (like paragraphs, headers, tables in a Word document).
// It's just a sequence of characters, usually encoded in a standard format like UTF-8.
// Default Application Association: Operating systems use file extensions to associate files with default applications. For example:

// When you double-click a .txt file, it will typically open in a simple text editor (Notepad on Windows, TextEdit on macOS, Gedit/Nano/Vim on Linux).
// A .docx file opens in Microsoft Word.
// A .pdf file opens in a PDF viewer.
// A .js file (JavaScript) might open in a code editor.
// Programmatic Interpretation: Programs also use the extension to understand how to process the file. While your Node.js fs.readFile function can read any file as raw bytes, if it's expecting human-readable text, the .txt extension gives a clear signal. For instance, if a program needed to parse JSON data, it would typically look for a .json extension, even though a JSON file is also technically plain text.

//Clarity and Convention: It's a widely accepted convention that makes it easy for developers and users to quickly understand what kind of data is stored in a file. If you named your text file starter.image, it

//starter.txt is a filename, not a module or a keyword.
//The .txt extension signifies that it's a plain text file, a widely used convention for indicating file content type.



//first code to implement 
//const fs = require('fs')
//fs.readFile('./files/starter.txt',(err,data)=>{//fs.readFile('./files/starter.txt','utf8'(uncoding buffer of data into a data of string ))
    //if(err) throw err;
    //console.log(data); or console.log(data.toString());

//})//output <we got buffer data>
// we have error but caught then exit on uncaught errors 
// processs.on('uncaughtException,err =>{
    //console.error(`there was an uncaught error:${err}`);
    //process.exit(1);
//})
//The console.error() method is used instead of console.log() for specific and important reasons related to logging and debugging.

// Here's why console.error is preferred for errors:

// Semantic Meaning (It's an Error!):

// console.log() is generally for informational messages or debugging output during normal program execution.
// console.error() is specifically designed for error messages. Using it clearly communicates the nature of the message being outputted. It tells anyone (or any tool) reading the output that "this is something that went wrong."
// Output Streams (Standard Error vs. Standard Output):

// By default, console.log() writes its output to stdout (Standard Output).
// console.error() writes its output to stderr (Standard Error).

//in reand and write files 
//NEXT in this topic it is Synchronous = "Do this, then do that, then do the next thing, only when the previous one is fully done."
//Asynchronous = "Start this task, then immediately start that task, and I'll deal with their results whenever they're ready." and asyn and await is when promises are used 




//path module 
//const fs =require('fs');
//const path = require('path';)
// first we use without any asynchronous 
//const fs= require('fs');
//const path = require('path')

//fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    //if(err) throw err;
    //console.log(data);
//})
//write file
//fs.writeFile(path.join(__dirname,'files','reply.txt'),'nice to see you ',(err)=>{
    //if(err) throw err; console.log(opertion completed)}) // for the we write the file 
    // next one updating file so we use append the file

//fs.appendFile(path.join(__dirname,'files','append.txt'),'testing test',(err)=>{
    //if(err) throw err;
    //console.log(updating completed ) })// we use call back function 
    //fs.rename(path.join(__dirname,'files','reply.txt),path.join(__dirname,'files','newReply.txt))
    //callback we are contolling flow we can avioded above all these 

    //asychronous
    //we are importing a files opertions

const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'stared.txt'), 'utf8');
        console.log(data);
        
        await fsPromises.unlink(path.join(__dirname, 'files', 'stared.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nNice to meet you');
        
        // Corrected the typo here
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseWrite.txt'));
        
        // Changed to read from the correct file
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'utf8');
        console.log(newData);
        
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
};

process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(10);
});

// Call the function to execute the file operations
fileOps();


