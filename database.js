/**
 * @name api:database
 * @description Database Wrapper
 */

// NPM Modules
var mongoose = require('mongoose'),
    bluebird = require('bluebird'),

    // configuration
    config = require('./config');

// Connect
module.exports.connect = (callback) => {
    let options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };

    mongoose.Promise = bluebird;
    mongoose.connect(config.db, options);

    // Mongoose Connection Events
    // Event: Connected
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected with MongoDB: ' + (new Date()).toISOString());
        callback();
    });

    // Event: Disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB Connection Closed: ' + (new Date()).toISOString());
    });

    // Event: Error
    mongoose.connection.on('error', (error) => {
        console.log('MongoDB Connection Error: ' + (new Date()).toISOString());
    });
};
