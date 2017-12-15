const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();

// middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// 'async' function mock
const getUsersJSON = function getUsersJSON() {
  return new Promise((resolve) => {
    const users = [
      {
        id: 1,
        firstName: 'Bob',
        lastName: 'Smith',
        email: 'bob@gmail.com',
      },
      {
        id: 2,
        firstName: 'Tammy',
        lastName: 'Norton',
        email: 'tnorton@yahoo.com',
      },
      {
        id: 3,
        firstName: 'Tina',
        lastName: 'Lee',
        email: 'lee.tina@hotmail.com, ',
      },
    ];
    resolve(users);
  });
};

/*
 * GET /users route to retrieve all the users.
 * EXAMPLE
 */
app.get('/users', async (req, res) => {
  const users = await getUsersJSON();
  res.json(users);
});

/*
 * General 404
 */
app.use((req, res) => {
  res.status(404).send({ url: `${req.originalUrl}  not found` });
});

module.exports = app;
