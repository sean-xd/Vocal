var express = require("express"),
  app = express(),
  badTraffic = 0;

app.use(function (req, res, next) {
  if(req.hostname === "executiverisk.xyz") next();
  else if(req.hostname === "www.executiverisk.xyz") next();
  else {
    console.log(req.hostname, new Date(), ++badTraffic);
    res.end("<html><script>alert('Hello, you are accessing this site from an illegitimate url. Whatever site you expected is linking to my site improperly.'); window.location = 'https://twitch.tv/sailorsalty;'</script></html>");
  }
});

app.use(express.static(__dirname + "/dist"));
app.use("/contributors", express.static(__dirname + "/dist"));
app.use("/contributors/:name", express.static(__dirname + "/dist"));
app.use("/products", express.static(__dirname + "/dist"));
app.use("/inquiry", express.static(__dirname + "/dist"));
app.use("/articles/:title", express.static(__dirname + "/dist"));
app.use("/tags/:tag", express.static(__dirname + "/dist"));
app.use("/admin", express.static(__dirname + "/dist"));

app.listen(80);