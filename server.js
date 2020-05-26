const http = require('http');
const fs = require('fs');

const port = 3000;

// Handles HTTP requests
const requestHandler = fs.writeFileSync(
  'hello-world.txt',
  'Hello to this great world!',
  'utf8',
  err => {
    if (err) throw err;
    console.log('success');
  }
);

// Create a server and pass in the requestHandler function
const server = http.createServer(requestHandler);

// Start the handler listening on port 3000
server.listen(port, err => {
  if (err) {
    return console.log(`You have an err: ${err}`);
  }
  console.log(`server is listening on port ${port}`);
});
