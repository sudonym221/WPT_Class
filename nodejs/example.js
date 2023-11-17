var http = require('http');
var mysql = require('mysql');

// DB configuration
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passWORD321$",
  database: 'travel'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE TABLE places(place_id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(20), description TEXT);", function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

// HTTP server
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);