const express = require('express');
const app = express();
const port = 5000;
app.use(express.static(__dirname))
app.listen(port, ()=>{console.log(port)})
