'use strict';

module.exports = function(app) {
    var todolist = require ('../controller/transaction-controller');

    app.route('/transactions')
        .get(todolist.transactions);
    
    app.route('/transaction/:id')
        .get(todolist.getTransactionId);
    
    app.route('/transaction/:id')
        .delete(todolist.del);
    
    app.route('/transaction')
        .post(todolist.insertTransaction);
    
    app.route('/transaction')
        .put(todolist.updateTransaction);
}