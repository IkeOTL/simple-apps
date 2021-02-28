const express = require('express');
const fs = require('fs');

const PORT = 8008;

const app = express();
app.use(express.json());

const messages = [{
  user: "Ike",
  message: "Welcome to Simple Chat!"
}];

app.get('/', (req, res) => {
  res.setHeader("content-type", "text/html");
  return fs.createReadStream("index.html").pipe(res);
});

app.post('/message', (req, res) => {
  messages.push(req.body);
  return res.send('ok');
});

app.get('/message', (req, res) => {
  return res.send(messages);
});

app.listen(PORT, () =>
  console.log(`Super simple chat app listening on port ${PORT}!`),
);
