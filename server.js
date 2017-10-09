var express = require("express"), app = express();

app.use(function (req, res, next) {
  console.log(req.hostname);
  if(req.hostname === "executiverisk.xyz") next();
  else if(req.hostname === "www.executiverisk.xyz") next();
  else res.end("Hello, you are accessing this site from an illegitimate url. Whatever site you expected is linking to my site improperly.");
});

app.use(express.static(__dirname + "/dist"));
app.use("/contributors", express.static(__dirname + "/dist"));
app.use("/contributors/:name", express.static(__dirname + "/dist"));
app.use("/products", express.static(__dirname + "/dist"));
app.use("/inquiry", express.static(__dirname + "/dist"));
app.use("/articles/:title", express.static(__dirname + "/dist"));
app.use("/admin", express.static(__dirname + "/dist"));

app.listen(80);