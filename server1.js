// // importing the http module
// const http = require("http");

// // Making a server
// const server = http.createServer((req, res) => {
//     res.write("Hello From node js server!") // sending a response
//     res.end(); //ending the response
// })

// // starting a server in port 3000
// server.listen(3000, () => {
//     console.log("server is running on port 3000");
// })


// practice

const http = require("http");

const server = http.createServer((req, res) => {
    res.write("Tamim Hasan Nahian");
    res.end();
})

server.listen(3000, () => {
    console.log("server is running on port 3000");
})