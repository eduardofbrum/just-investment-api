var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({ 
    textPrimary: "#FFFFFF",
    elementBackground: "#2E2D33",
    primaryRed: "#F05454",
    primaryBlue: "#5FDDE5",
    primaryOrange: "#EE6F57",
    primaryGreen: "#50D890" })
});

app.listen(PORT, function () {
});
