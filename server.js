var express = require("express"), app = express();

app.use(function (req, res, next) {
  if(req.hostname === "executiverisk.xyz") next();
  else res.send("Hello, you are accessing this site from an illegitamate url. Whatever site you are coming from is a scam.");
});

app.use(express.static(__dirname + "/dist"));
app.use("/contributors", express.static(__dirname + "/dist"));
app.use("/contributors/:name", express.static(__dirname + "/dist"));
app.use("/products", express.static(__dirname + "/dist"));
app.use("/contact", express.static(__dirname + "/dist"));
app.use("/articles/:title", express.static(__dirname + "/dist"));

app.listen(80);