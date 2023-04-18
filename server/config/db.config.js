module.exports = {
  HOST: "localhost",
  PORT: 7000,
  USER: "postgres",
  PASSWORD: "Test123",
  DB: "Ticket_DataBase",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
