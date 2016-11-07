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

    
app.get('/ui/a', function (req, res) {
    pool.query("INSERT INTO \"user\" (\"user_name\", \"email\",\"password\") VALUES ('a','b','c')", function(err) {
        if(err)
        {
            res.end('An error occurred');
        }
        else
        {
            res.writeHead(200, {'content-type': 'text/plain'});
        }


    });
});

function myFunction() {
    document.getElementById("article").innerHTML = "Hello World";
}
