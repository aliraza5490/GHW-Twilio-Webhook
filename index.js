const express = require("express");
const app = express();
const port = 3000;
// calling body-parser to handle the Request Object from POST requests
var bodyParser = require("body-parser");
// parse application/json, basically parse incoming Request Object as a JSON Object
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded, basically can only parse incoming Request Object if strings or arrays
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/sms", (req, res) => {
  let number = req.body.From;
  let messageBody = req.body.Body;
  console.log(`Message from ${number}, containing ${messageBody}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
