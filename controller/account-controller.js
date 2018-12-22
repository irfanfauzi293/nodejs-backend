var response = require('../model/res');
var accountDao = require('../dao/account-dao-sequelize');
var logger = require('../util/logging/winston-logger');
var util = require('util');

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
    accountDao.getById(req.params['id'],function(err,data) {
        if (err) {
            console.log('error call getById : ' + err);
            response.err(err,res);
        }
        response.ok(data,res);
    });
};

exports.updateAccount = function(req,res) {
    logger.info('request for update');
    logger.debug(req.body);
    accountDao.getById(req.body.account_number,function(err,data){
        if(err) {
            console.log('error call getById : ' + err);
            response.err(err, res);
        } else if (data==null) {
            response.datanotfound('account not found', res);
        } else {
            accountDao.update(req.body.account_number,req.body, function(err,data) {
                if (err) {
                    console.log('error call update : '+ err);
                    response.err(error,res);
                }
                response.ok('update data : ' + data.accountNumber, res);
            });
        }
    });
};

exports.insertAccount = function(req, res) {
    logger.info('request for insert : ');
    logger.debug(req.body);
    accountDao.insert(req.body, function(err, data) {
        if(err) {
            console.log('error call insert' + err);
            response.err(err, res);
        }
        response.ok('data inserted with id ' + data.accountNumber,res)
    });
};

exports.del = function(req,res) {
    logger.info(util.format('deleting account id %s', req.params['id']));
    accountDao.getById(req.params['id'], function(err,data) {
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