// Synchronous read:
const fs = require("node:fs");

const fileContents = fs.readFileSync("./file.txt", "utf-8")
console.log(fileContents);

// output:
// PS C:\Users\suraj\Desktop\PRoejct\Day2 Java Script\NodePlayGround> node sync.js
// hello world again


// Asynchronous read:
fs.readFile("./file.txt","utf-8",(err,data)=> {
if (err){
    console.log(err);
    return;
} 
 console.log(data);
})
// output:
// PS C:\Users\suraj\Desktop\PRoejct\Day2 Java Script\NodePlayGround> node sync.js
// hello world again