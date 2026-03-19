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