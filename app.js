var express = require('express'),
  app = express();

// WHEN a user visits the homepage (like http://localhost:3000)
app.get("/", function (req, res) {
  // THEN send back the response: 'Hello World'
  res.send("Hello World");
});

// Start the server and make our web app available on http://localhost:3000
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
});

app.get("/meaning-of-life/:derp", function (req, res) {
  res.send("Josh is the man mr. " +errythang.name);
});
var vegetables = [
        "Carrots",
        "Cucumber",
        "Peas"
         ];
errythang = {name: "Jeremy", age: 25}
app.get("/vegetables", function (req, res) {
           //THEN send back a response with the veggies
           res.send(vegetables.join(", "));
         });
