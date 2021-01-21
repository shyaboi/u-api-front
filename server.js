const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 9001

let root = path.join(__dirname, 'build/')
app.use(express.static(__dirname + '/public'));


app.use(express.static(root))




app.get('/new/code-editor', function (req, res) {
   res.sendFile(path.join(__dirname, root, 'index.html'));
 });

app.listen(PORT);