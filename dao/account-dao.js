var connection = require('../db/conn');

const sqlGetById ="SELECT * FROM account WHERE account_number = ?";
const sqlUpdate = "UPDATE account SET ? WHERE account_number = ?";
const sqlGetAll = "SELECT * FROM account";
const sqlInsert = "INSERT INTO account SET ?";
const sqlDelete = "DELETE FROM account WHERE account_number = ?";

exports.getAll = function getAll(callback) {
    connection.query(sqlGetAll,function(error,rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null,rows);
    });
};

exports.getAccountById = function getAccountById(id, callback) {
    connection.query(sqlGetById,id, function(error,rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows[0]);
    });
};

exports.insert = function insert(data, callback) {
connection.query(sqlInsert, data, function(error,rows) {
    if (error) {
        console.log(error);
        return callback(error);
    }
    callback(null, rows);
});
};

exports.updateId = function update(id, data, callback) {
    connection.query(sqlUpdate, [data,id], function(error,rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    });
};

exports.deleteId = function del(id, callback) {
    connection.query(sqlDelete, id, function(error,rows) {
        if(error) {
            console.log(error);
            return callback(error);
        }
        callback(null, rows);
    });
};


