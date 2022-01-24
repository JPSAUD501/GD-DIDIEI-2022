const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send("Didiei está online!")
})
 
function keepAlive() {
  server.listen(2000, () => { console.log("Server is Ready!!" + Date.now()) });
}
 
module.exports = keepAlive;