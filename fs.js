// fs module is a node.js module where you can create files and folders or delete files and folders.
// we need to import the module first like that.
const fs = require("fs");

console.log("start");

// fs.readFileSync is the Synchronous way.
const data = fs.readFileSync("hello.txt", "utf8");

console.log(data)

console.log("end");

console.log("-----------------------------------------------------------------------");

// fs.readFile is the Asynchronous way.
console.log("start")

fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log("end")

// Writing Files

//The Synchronous way:
fs.writeFileSync("SynchronousFileWriting.txt", "Welcome to Bangladesh!", (err) => {
    if (err) throw err;
    console.log("File Created!")
})

// The normal way:
fs.writeFile("AsynchronousFileWriting.txt", "You are a programmer!", (err) => {
    if (err) throw err;
    console.log("Finished!")
})

// Adding changes to an existing file

//The Synchronous way:
fs.appendFileSync("SynchronousFileWriting.txt", "\nThat's a new line!", (err) => {
    if (err) throw err;
    console.log("Finished!")
})

// The normal way:
fs.appendFile("AsynchronousFileWriting.txt", "\nThat's also a new line from the normal way,", (err) => {
    if (err) throw err;
    console.log("Finished!")
})

//deleting files

//the synchronous way:
// fs.unlinkSync("hello.txt", (err) => {
//     if (err) throw err;
//     console.log("File deleted.")
// })

