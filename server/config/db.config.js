module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Siddhant@123",
    DB: "Ticket_DataBase",
    dialect: "postgres",

    pool: {
        max:5,
        min:0,
        acquire: 30000,
        idle:10000
    }
};