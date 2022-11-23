var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("all is good!");
})


app.listen(5000, () => console.log("server on port 5000!!!"));