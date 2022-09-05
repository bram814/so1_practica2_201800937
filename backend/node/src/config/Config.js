/*
   ----------------------------------------------
   -             Conexión en MySql              -
   - Pool: Son un conjunto de conexiones que se -
   -            están reciclando                -
   ----------------------------------------------
*/  

const config = require('./env.js');
const mysqldb = require('mysql')

db = {
    host:       config.DB_HOST,
    user:       config.DB_USER,
    password:   config.DB_PASS,
    database:   config.DB_NAME,
    port:       config.DB_PORT
}

var pool = mysqldb.createPool(db);

function open(insertQuery, data, callback){
    pool.getConnection(function (err, connection) {
        if (err) throw err
        var query = mysqldb.format(insertQuery, data)

        connection.query(query, function (err, result){
            if (err) throw err
            callback(result)

            connection.release();
        });

    });

}

exports.QUERY = open;


/* No optimo
var conn = mysqldb.createConnection(db); 


conn.connect(function(err){
    if (err) throw err
    console.log("Conn Mysql");
})

function open(insertQuery, data, callback){
    
    var query = mysqldb.format(insertQuery, data)
    conn.query(query, function (err, result){
        if (err) throw err
        callback(result)
        conn.end();
    });

}
*/