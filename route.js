/**
 * @name api:routes
 * @description API Routes
 */

// Controller
var contactform=require('./controllers/contactform')
module.exports = app => {
    

    app.route('/resume')
        .post(contactform.create);

  

    

    

    
};