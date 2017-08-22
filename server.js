
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');
var app = express();
var PORT = process.env.PORT || 3000;


var db = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api.json" }));

app.use(express.static(__dirname + "/public"));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/api-routes.js")(app);

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on port " + PORT);
    });
});