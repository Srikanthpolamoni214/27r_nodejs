const http = require("http");
const server = http.createServer((req, res) => {
    res.write("hello world");
  res.end("reponse provided");
});
server.listen("4101",()=>{
  console.log("server is running")
})
