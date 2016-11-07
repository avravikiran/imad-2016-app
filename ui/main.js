var Pool = require('pg').Pool;

var config = {
  user: 'avravikiran',
  host: 'db.imad.hasura-app.io',
  password: process.env.DB_PASSWORD,
  port: '5432',
  database: 'avravikiran'
};


console.log('Loaded!');
document.getElementById("profile").onclick=function(){viewProfile()};

var pool = new Pool(config);

    

document.getElementById("c_buttion").onclick = function myFunction() {
    document.getElementById("article").innerHTML = "Hello World";
}
