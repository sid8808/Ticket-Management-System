const { Client } = require('pg');

const client = new Client ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Siddhant@123",
    database: "Ticket_DataBase"
})

client.connect();

client.query(`select * from ticket_table`, (err, result) => {
    if(!err) {
        console.log(result.rows);
    }
    client.end;
})