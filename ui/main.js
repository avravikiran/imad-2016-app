var Pool = require('pg').Pool;

var config = {
  user: 'avravikiran',
  host: 'db.imad.hasura-app.io',
  password: process.env.DB_PASSWORD,
  port: '5432',
  database: 'avravikiran'
};

console.log('Loaded!');

function myFunction() {
    document.getElementById("comment").innerHTML = "Hello World";
}


