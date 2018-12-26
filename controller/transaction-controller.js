var response = require('../model/res');
var transactionDao = require('../dao/transaction-dao-sequelize');
var logger = require('../util/logging/winston-logger');
var util = require('util');

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
    transactionDao.getById(req.params['id'], function(err,data) {
        if(err) {
            console.log('error call getById : '+err);
            response.err(err,res);
        }
        response.ok(data,res);
    });
};

exports.updateTransaction = function(req,res) {
    transactionDao.getById(req.body.transactionNumber,function(err,data) {
        if(err) {
            console.log('error call getById : ' + err);
            response.err(err.res);
        } else if (data==null) {
            response.datanotfound('transaction not found',res);
        } else {
            transactionDao.update(req.body.transactionNumber, req.body,function(err,data) {
                if(err) {
                    console.log('error call update : ' + err);
                    response.err(error,res);
                }
                response.ok('update data : ' + req.body.transactionNumber, res);
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
    transactionDao.getById(req.params['id'],function(err,data) {
        if(err) {
            console.log('error call getById : ', err);
            response.err(err,res);
        } else if (data==null) {
            response.datanotfound('transaction not found', res);
        } else {
            transactionDao.del(req.params['id'], function(err,data) {
                if(err) {
                    console.log('error call delete : ' + err) 
                    response.err(error.res);
                }
                response.ok('id '+data+' was deleted',res);
            })
        }
    })
}