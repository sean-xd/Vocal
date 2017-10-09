var express = require("express"), app = express();

app.use(express.static(__dirname + "/dist"));
app.use("/contributors", express.static(__dirname + "/dist"));
app.use("/contributors/:name", express.static(__dirname + "/dist"));
app.use("/products", express.static(__dirname + "/dist"));
app.use("/inquiry", express.static(__dirname + "/dist"));
app.use("/articles/:title", express.static(__dirname + "/dist"));

app.listen(3000);