const http = require("http");
let obj ={
  name:"srikanth",
  id:1,
  city:"Hyderabad"
}
const server = http.createServer((req, res) => {
  res.writeHead(201,"hiii srikanth",{"content-type":"application/json"})
    res.write(JSON.stringify(obj));
  res.end("");
});
server.listen("3100",()=>{
  console.log("server is running")
})
