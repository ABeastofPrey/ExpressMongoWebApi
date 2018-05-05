const config = require('../../config.json');
const mongoose = require('mongoose');

const host = config.host,
    port = config.port,
    dbName = config.dataBaseName;

// const { host, port, dbName } = config;

const database_url = 'mongodb://' + host + ':' + port + '/' + dbName;

/**
 * 连接
 */
mongoose.connect(database_url);

/**
  * 连接成功
  */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + database_url);
});

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;