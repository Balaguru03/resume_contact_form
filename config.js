/**
 * @name api:config
 * @description API Configurations
 */

const config = {
    // Server Config
    port:process.env.PORT || 6500,

    // DB Config
    db: process.env.MONGOLAB_URI || 'mongodb://localhost:27017/resume',

    // App Config
    urlPrefix: '/api'
};


module.exports = config;