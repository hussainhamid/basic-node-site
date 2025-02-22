const http = require("http");
const fs = require("fs");

const server = http
  .createServer((req, res) => {
    res.setHeader("content-type", "text/html");

    let path = "./html-files/";

    switch (req.url) {
      case "/":
        path += "main.html";
        res.statusCode = 200;
        break;

      case "/about":
        path += "about.html";
        res.statusCode = 200;
        break;

      case "/contact-me":
        path += "contact.html";
        res.statusCode = 200;
        break;

      default:
        path += "404.html";
        res.statusCode = 404;
        break;
    }

    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
        res.end;
      } else {
        res.write(data);
        res.end;
      }
    });
  })
  .listen(8080);
