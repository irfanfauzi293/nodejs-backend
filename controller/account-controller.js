var response = require('../model/res');
var accountDao = require('../dao/account-dao');

exports.accounts = function(req,res) {
    accountDao.getAll(function(error,rows){
        if(error) {
            console.log('error while select: '+error);
            response.err(error,res);
        } else {
            response.ok(rows,res)
        }
    });
};

exports.getAccountId = function(req,res) {
    accountDao.getAccountById(req.params['id'],function(err,data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err,res);
        }
        response.ok(data,res);
    });
};

exports.updateAccount = function(req,res) {
    accountDao.getAccountById(req.body.account_number,function(err,data){
        if(err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data==null) {
            response.datanotfound('account not found', res);
        } else {
            accountDao.updateId(req.body.account_number,req.body, function(err,data) {
                if (err) {
                    console.log('error call update : '+ err);
                    response.err(error,res);
                }
                response.ok('update data : ' + data.message, res);
            });
        }
    });
};

exports.insertAccount = function(req, res) {
    accountDao.insert(req.body, function(err, data) {
        if(err) {
            console.log('error call insert' + err);
            response.err(err, res);
        }
        response.ok('data inserted with id ' + data.insertId,res)
    });
};

exports.del = function(req,res) {
    accountDao.getAccountById(req.params['id'], function(err,data) {
        if(err) {
            console.log('error call getById :'+ err);
            response.err (err,res);
        } else if (data==null) {
            response.datanotfound('account not found', res);
        }else {
            accountDao.deleteId(req.params['id'],function(err,data) {
                if(err) {
                    console.log('error call delete : '+ err);
                    response.err(error,res);
                }
                response.ok(data,res);
            });
        }
    });
};