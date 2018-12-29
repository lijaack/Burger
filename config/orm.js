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

    updateOne: function(){

    }
};

module.exports = orm;
