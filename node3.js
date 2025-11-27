// Chapter 3 Example Code – Node.js Modules & FS

// Importing the FS module
const fs = require("fs");

// 1. Create a new file
fs.writeFile("example.txt", "This is chapter 3 content.", (err) => {
    if (err) throw err;
    console.log("File created!");
});

// 2. Read the file
fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
});

// 3. Append data to the file
fs.appendFile("example.txt", "\nAppended text.", (err) => {
    if (err) throw err;
    console.log("Data appended!");
});

// 4. Rename the file
fs.rename("example.txt", "chapter3-output.txt", (err) => {
    if (err) throw err;
    console.log("File renamed!");
});
