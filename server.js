// init project
const express = require('express');
const app = express();
let headerInfo = {} 

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/whoami', (req,res) => {
  headerInfo.ipAddress = req.headers['x-forwarded-for'].split(',')[0];
  headerInfo.language = req.headers['accept-language'].split(',')[0];
  headerInfo.userAgent = req.headers['user-agent'].split('(')[1].split(')')[0];
  res.send(headerInfo);
});

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log('Express is listening on...' + process.env.PORT)
});