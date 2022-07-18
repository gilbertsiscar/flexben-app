const http = require('http');
const app = require('./app');
const db = require('./db');

const server = http.createServer(app);
server.listen(5000, () => console.log('Server started on port 5000'));

db.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + db.threadId);
});
