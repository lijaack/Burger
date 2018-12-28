var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burger", function(res){
            cb(res);
        });
    },
    insertOne: function() {
        orm.insertOne(function(res){

        });
    },
    updateOne:function() {
        orm.updateOne(function(res){

        });
    }
};

module.exports = burger;