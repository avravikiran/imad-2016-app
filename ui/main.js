

console.log('Loaded!');

var config = {
  user: 'avravikiran',
  host: 'db.imad.hasura-app.io',
  password: db-avravikiran-58948,
  port: '5432',
  database: 'avravikiran'
};

var Pool = require('pg').Pool;
var pool = new Pool(config);
console.log(pool);


