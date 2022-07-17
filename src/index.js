const express = require('express');
const bodyParser = require('body-parser');
let viewEngine = require('./config/viewEngine');
let initWebRoutes = require('./routes/web');
const app = express();
let port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

viewEngine(app);
initWebRoutes(app);



app.listen(port, () => {
  console.log('Server is running on port ', port);
})
