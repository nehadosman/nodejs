const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let PORT = process.env.PORT || "7003";
CLIENTS = []

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/main.html", (req, res) => {
  // res.sendFile("C:/iti lectures/nodejs/lab3/taskday3/Client/main.html");
  res.sendFile(path.join(__dirname, "../Client/main.html"));
});

app.post("/main.html", (req, res) => {
  // res.sendFile("C:/iti lectures/nodejs/lab3/taskday3/Client/main.html");
  console.log(req.body.clientName);
  res.sendFile(path.join(__dirname, "../Client/main.html"));
  res.send("ana post");
});

app.get("/welcome.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../Client/welcome.html"));
});


app.post("/welcome.html", (req, res) => {
  let userInfo = {};
  userInfo["clientName"] = req.body.clientName;
  userInfo["clientNumber"] = req.body.clientNumber;
  userInfo["clientEmail"] = req.body.clientEmail;
  userInfo["clientAddress"] = req.body.clientAddress;
  CLIENTS.push(userInfo);

  var welcomeHTML = fs.readFileSync(path.join(__dirname, "../Client/welcome.html"));
  welcomeHTML = welcomeHTML.toString();
  welcomeHTML = welcomeHTML.replace("{clientName}", userInfo["clientName"]);
  welcomeHTML = welcomeHTML.replace("{clientNumber}", userInfo["clientNumber"]);
  welcomeHTML = welcomeHTML.replace("{clientEmail}", userInfo["clientEmail"]);
  welcomeHTML = welcomeHTML.replace("{clientAddress}", userInfo["clientAddress"]);

  res.send(welcomeHTML);
  // res.sendFile(path.join(__dirname, "../Client/welcome.html"));
  console.log(userInfo);
});

// app.get("/welcome.js", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Client/welcome.js"));
// });
app.get("/userdata", (req, res) => {
  res.send(JSON.stringify(CLIENTS));
});

app.listen(PORT, () => console.log("http://localhost:" + PORT));
