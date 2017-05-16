var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8000

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client')));

require("./routes.js")(app, express)

var server = app.listen(PORT, function() {
  console.log("listening on port on " + PORT);
});
