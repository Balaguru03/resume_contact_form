/**
 * @name api:models:agent
 * @description agent
 */

// NPM Modules
var mongoose = require('mongoose')
    
// Schema
var collection = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
        // unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true
    },
    organization:{
        type:String
        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    strict: false,
    versionKey: false
});

// collection.plugin(autoIncrement.plugin, {
//     model: 'Agent',
//     field: 'agentId',
//     startAt: 0,
//     incrementBy: 1
// })

module.exports = mongoose.model('Contactform', collection);
