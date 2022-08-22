const sequelize = require("./sequelize.js");

module.exports = {
  seed: (req, res) => {
    sequelize.query(`
    DROP TABLE IF EXISTS people;
    DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(2000)
);


CREATE TABLE people (
    person_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL REFERENCES users(user_id),
    name VARCHAR(80),
    type VARCHAR(80),
    birthday VARCHAR(60),
    description VARCHAR(500)
);

INSERT INTO users (username, password)
VALUES ('hyrumgary', 'oncegatos');

INSERT INTO people (user_id, name, type, birthday, description)
VALUES (1, 'Hyrum Sorensen', 'Family', '06/27/2000', 'Founder of this Database');

   `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
  },

  createNewUser: (req, res) => {
    const {username, password} = req.body;
    sequelize.query( `
      INSERT INTO users (username, password)
      VALUES ('${username}', '${password}')
    `).then(() => {
      console.log('successfully added user to database')
      res.sendStatus(200)
    }).catch(err => console.log('error adding new user to database'))
  },

  authUser: (req, res) => {
    const {username, password} = req.query
    sequelize.query( `
      SELECT user_id FROM users
      WHERE username='${username}'
      AND password='${password}';
    `).then((dbRes) => {
      console.log('Authenticated user')
      res.status(200).send(dbRes[0])
    }).catch(err => console.log(err))
  },
  createNewPerson: (req, res) => {
    const {userId, name, type, birthday, description } = req.body;
    sequelize.query( `
      INSERT INTO people (user_id, name, type, birthday, description)
      VALUES ('${userId}', '${name}', '${type}', '${birthday}', '${description}')
    `).then(() => {
      console.log('successfully added person to database')
      res.sendStatus(200)
    }).catch(err => console.log('error adding new user to database'))
  },
};
