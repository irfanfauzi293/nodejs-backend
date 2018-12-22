'use strict';

module.exports = function(app) {
    var todoList = require('../controller/account-controller');

    app.route('/accounts')
        .get(todoList.accounts);

    app.route('/account/:id')
        .get(todoList.getAccountId);
    
    app.route('/account/:id')
        .delete(todoList.del);
    
    app.route('/account')
        .post(todoList.insertAccount);
    
    app.route('/account')
        .put(todoList.updateAccount);
}