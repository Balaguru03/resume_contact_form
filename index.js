/**
 * @name api:server
 * @description Api Server
 */

// Modules
var db = require('./database'),

    // configurations
    config = require('./config'),

    // NPM Modules
    express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    cors = require('cors');

// App Setup
db.connect(() => {
    // Express
    let app = express();

    // Middlewares
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('showStackError', true);
    app.use(cors());

    // Routes
    let router = express.Router();
    require('./route')(router);
    app.use(config.urlPrefix, router);

    // Server
    let server = http.createServer(app);
    server.listen(config.port, () => {
        console.log('--: Application Started :--');
    });
});




