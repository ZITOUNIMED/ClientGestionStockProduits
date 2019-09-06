const express = require("express");
const app = express();
const path = require("path");
const request = require("request");

app.use(express.static(__dirname + "/dist/client-gestion-stock-produits"));

app.listen(process.env.PORT || 4200);

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/client-gestion-stock-produits/index.html"));
  });

console.log("App is listenning!");