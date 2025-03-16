const http = require("http");
let obj ={
  name:"srikanth",
  id:1,
  city:"Hyderabad"
}
const server = http.createServer((req, res) => {
  res.writeHead(201,"hiii srikanth",{content:"application/json"})
    res.write(obj);
  res.end("");
});
server.listen("4101",()=>{
  console.log("server is running")
})
