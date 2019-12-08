var Model = require('.././models/contactform'),

    bluebird = require('bluebird');

module.exports.upsert = (query, record) => {
    return new bluebird((resolve, reject) => {
    let document = new Model(record);
    document.save((err, doc) => {
        if (err) {
            reject(err);
        } else {
            resolve(doc);
        }
    })
    });
};