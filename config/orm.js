var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
            throw err;
            }
            cb(result);
        });
    },

    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += vals.toString();
        queryString += ") ";
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },

    updateOne: function(table, id, cb){
        var queryString = "UPDATE " + table + " SET devoured = 1 WHERE " + id;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },

    delete: function(table, id, cb){
        var queryString = "DELETE FROM " + table + " WHERE " + id;
        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;
