var Model = require('.././models/contactform'),

    // NPM Modules
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
    // return new bluebird((resolve, reject) => {
        // Model.findOne(query)
        //     .exec((err, docs) => {
        //         if (err) {
        //             reject(err);
        //         } else {
        //             if (docs) {
        //                 resolve(docs);
        //             } else {

        //             }
        //         }
        //     });
    // })
};