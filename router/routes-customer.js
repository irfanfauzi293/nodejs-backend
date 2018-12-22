'use strict';

module.exports = function(app) {
    var todoList = require('../controller/customer-controller');

    app.route('/customers')
        .get(todoList.customers);

    app.route('/customer')
        .post(todoList.insertCustomer);
    
    app.route('/customer/:id')
        .get(todoList.getCustomerId);

    app.route('/customers/:id')
        .delete(todoList.del)
    
    app.route('/customer')
        .put(todoList.updateCustomer);
};