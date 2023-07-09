var http = require("http");

const server = http.createServer((req,res)=>{
    res.end("API is working..");
})



server.listen(3000,()=>{
    console.log("**** API Server")
})