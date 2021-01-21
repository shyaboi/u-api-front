const express = require('express');
const path = require('path');
const app = express();

let root = path.join(__dirname, 'build/')
app.use(express.static(root))
app.use(function(req, res, next) {
  if (req.method === 'GET' && req.accepts('html') && !req.is('json') && !req.path.includes('.')) {
    res.sendFile('index.html', { root })
  } else next()
})


app.get('/new/code-editor', function (req, res) {
   res.sendFile(path.join(__dirname, root, 'index.html'));
 });

app.listen(9001);