var express = require('express');
var app = express();

let jsonFile = [
                    {
                        "id":"0",
                        "image":"gol_trendline.jpg",
                        "manufacturer":"Volkswagen",
                        "model":"Gol Trendline",
                        "engineSize":"80cm x 96cm",
                        "speed":"140 km/h",
                        "acceleration":"12 s"
                    },
                    {
                        "id":"1",
                        "image":"fox_pepper.png",
                        "manufacturer":"Volkswagen",
                        "model":"Fox Pepper",
                        "engineSize":"72cm x 94cm",
                        "speed":"170 km/h",
                        "acceleration":"11 s"
                    },
                    {
                        "id":"2",
                        "image":"citroen_c3.jpg",
                        "manufacturer":"Citroen",
                        "model":"C3",
                        "engineSize":"87cm x 56cm",
                        "speed":"185 km/h",
                        "acceleration":"7 s"
                    },
                    {
                        "id":"3",
                        "image":"citroen_c3_picasso.jpg",
                        "manufacturer":"Citroen",
                        "model":"C3 Picasso",
                        "engineSize":"73cm x 97cm",
                        "speed":"168 km/h",
                        "acceleration":"14 s"
                    }
                ];

app.get('/cars', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(jsonFile);
})

app.get('/', function (req, res) {
    res.send("HOME (:");
})

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });