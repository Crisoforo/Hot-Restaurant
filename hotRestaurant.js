var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

var tables = [
    {
        table: "",
        name: null,
        email: "",
        phone: "",
        id: ""
    }
];
var waitList = [
    {
        table: "",
        name: "",
        email: "",
        phone: "",
        id: ""
    }
];

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/tables", function(req, res) {
    res.sendFile(__dirname + "/tables.html");
});

app.get("/reserve", function(req, res) {
    res.sendFile(__dirname + "/reserve.html");
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



app.get("/api/tables", function (req, res){
    return res.json(tables);
});

app.get("/api/waitlist", function (req, res){
    return res.json(waitList);
});
app.post("/api/tables", function(req, res) {
    var newTable = req.body;
    tables.push(newTable);
    res.json(newTable);
});

app.post("/api/waitlist", function(req, res) {
    var newWaitList = req.body;
    waitList.push(newWaitList);
    res.json(newWaitlist);
});