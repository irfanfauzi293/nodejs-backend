var response = require('../model/res');
var transactionDao = require('../dao/transaction-dao');

exports.transactions = function(req,res) {
    transactionDao.getAll(function(error,rows) {
        if(error) {
            console.log('error while select: '+ error);
            response.err(error,res);
        } else {
            response.ok(rows,res);
        }
    });
};

exports.getTransactionId = function(req,res) {
    transactionDao.getTransactionById(req.params['id'], function(err,data) {
        if(err) {
            console.log('error call getById : '+err);
            response.err(err,res);
        }
        response.ok(data,res);
    });
};

exports.updateTransaction = function(req,res) {
    transactionDao.getTransactionById(req.body.id_transaction,function(err,data) {
        if(err) {
            console.log('error call getById : ' + err);
            response.err(err.res);
        } else if (data==null) {
            response.datanotfound('transaction not found',res);
        } else {
            transactionDao.updateId(req.body.id_transaction, req.body,function(err,data) {
                if(err) {
                    console.log('error call update : ' + err);
                    response.err(error,res);
                }
                response.ok('update data : ' + data.message, res);
            });
        }
    });
};

exports.insertTransaction= function(req,res) {
    transactionDao.insert(req.body, function(err,data) {
        if(err) {
            console.log('error call insert' + err);
            response.err(err,res);
        }
        response.ok('data inserted with id ' + data.insertId, res)
    });
};

exports.del = function(req,res) {
    transactionDao.getTransactionById(req.params['id'],function(err,data) {
        if(err) {
            console.log('error call getById : ', err);
            response.err(err,res);
        } else if (data==null) {
            response.datanotfound('transaction not found', res);
        } else {
            transactionDao.deleteId(req.params['id'], function(err,data) {
                if(err) {
                    console.log('error call delete : ' + err) 
                    response.err(error.res);
                }
                response.ok(data,res);
            })
        }
    })
}