var _ = require('lodash'),
bluebird = require('bluebird')
var form = require('../services/contactform')
module.exports.create = (req, res) => {
    var body = _.get(req, 'body', {});
    let record = {
        name: body.name,
        email: body.email,
        phone: body.phone,
        organization: body.organization
    };
    form.upsert({
        name: record.name, 
        email: body.email,
        phone: body.phone,
        organization: body.organization
    }, record)
        .then(doc => {
            res.status(200)
                .json({
                    code: 200,
                    status: 'success',
                    data: doc
                });
        })
        .catch(error => {
            res.status(500)
                .json({
                    code: 500,
                    status: error,
                    message: error
                })
        });
};