const app = require('./server');

const port = process.env.PORT || 3000;
console.log(`starting project in port ${port}`); // eslint-disable-line

// start the server
app.listen(port, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line
  }
});

