const mysql = require('mysql');
let pool;
const dev = true;

if(dev)
{
    pool = mysql.createPool({
        host: 'localhost',
        port: '3307',
        user: 'root',
        password: 'usbw',
        database: 'mini-lab'
    });
}
else{
    pool = mysql.createPool(process.env.CLEARDB_DATABASE_URL);
}

const message =
{
    query_null: {
        "code": 500,
        "message": "Something went wrong"
    }
}


exports.getPosts = function(callback){
    const sql = "select post.pid, post.ptitle, post.pdescription, post.pdate, post.passcode, post.pcontent, post.pmetadata from post";
    pool.getConnection(function(err, connection){
        if(err)
        {
            callback(true, message.query_null);
            return;
        }

        connection.query(sql, function(err, result){
            connection.release();
            if(err || !result)
            {
                callback(true, message.query_null);
                return;
            }
            callback(false, result);
        });
    });
};

exports.getEntry = function(pid, callback){
    const sql = "select * from post where post.PID = "+ pid;
    pool.getConnection(function(err, connection){
        connection.query(sql, function(err, result){
            connection.release();
            if(err || !result)
            {
                callback(true, message.query_null);
                return;
            }

            callback(false, result[0]);
        });
    })
};