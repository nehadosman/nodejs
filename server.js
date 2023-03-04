const http = require("http");
const fs = require("fs");

CLIENTS = []

var mainHTMl = fs.readFileSync("task2lab2.html");
var welcomeHTML = fs.readFileSync("welcome.html");

var server = http.createServer(function (req, res) {
  if (req.method == "GET") {
    if (req.url == "/main.html") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(mainHTMl);
    } else if (req.url == '/get-clients') {
      console.log(88888888)
      // res.writeHead(200, { "Content-Type": "text/html" });
      res.write(JSON.stringify(CLIENTS));
      res.end()
    }
  } else if (req.method == "POST") {
    if (req.url == "/add") {
      let data = "";
      console.log(7444444)
      req.on("data", (chunk) => {
        data += chunk;
      });
      req.on("end", () => {
        let dataList = data.split("&");
        var clientName = dataList[0].toString().split("=")[1];
        var clientNumber = dataList[1].toString().split("=")[1];
        var clientEmail = dataList[2].toString().split("=")[1];
        var clientAddress = dataList[3].toString().split("=")[1];

        console.log(clientName, clientEmail, clientAddress, clientNumber);
        welcomeHTML = welcomeHTML.toString();
        welcomeHTML = welcomeHTML.replace("{clientName}", clientName);
        welcomeHTML = welcomeHTML.replace("{clientEmail}", clientEmail);
        welcomeHTML = welcomeHTML.replace("{clientAddress}", clientAddress);
        welcomeHTML = welcomeHTML.replace("{clientNumber}", clientNumber);
        CLIENTS.push({
          clientName: clientName,
          clientEmail: clientEmail,
          clientAddress: clientAddress,
          clientNumber: clientNumber,
        })
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(welcomeHTML);
      });
    }
  }
});
server.listen(7000, () => {
  console.log("http://localhost:7000");
});
