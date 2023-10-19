const dotenv = require('dotenv').config({path: "././.env"});

module.exports = {
  development: {
    username: process.env.SROOT,
    password: process.env.PWOD,
    database: process.env.DDBF,
    host: process.env.HTOS,
    dialect: process.env.DLECT,
    port: process.env.DBPORT
  },
  test: {
    username: process.env.SROOT,
    password: process.env.PWOD,
    database: process.env.DTBF,
    host: process.env.HTOS,
    dialect: process.env.DLECT
  },
  production: {
    username: process.env.SROOT,
    password: process.env.PWOD,
    database: process.env.DPBF,
    host: process.env.HTOS,
    dialect: process.env.DLECT
  }
}
