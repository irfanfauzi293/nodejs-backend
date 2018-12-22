var connection = require('../db/conn');

const sqlGetById ="SELECT * FROM customer WHERE customer_number = ?";
const sqlUpdate = "UPDATE customer SET ? WHERE customer_number = ?";
const sqlGetAll = "SELECT * FROM customer";
const sqlInsert = "INSERT INTO customer SET ?";
const sqlDelete = "DELETE FROM customer WHERE customer_number = ?";

exports.getCustomerById = function getById(id, callback) {
    connection.query(sqlGetById,id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows[0]);
    });
};

exports.getAll = function getAll(callback) {
    connection.query(sqlGetAll, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.insert = function insert(data, callback) {
    connection.query(sqlInsert, data, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.updateId = function update(id, data, callback) {
    connection.query(sqlUpdate, [data, id], function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};

exports.deleteId = function del(id, callback) {
    connection.query(sqlDelete, id, function (error, rows){
        if(error){
            console.log(error);
            return callback(error);
        } 
        callback(null, rows);
    });
};