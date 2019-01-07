var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsobject = {
            burgers: data
        };
        res.render("index", hbsobject);
    }); 
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      'burger_name', 'devoured'
    ], [
      "'" + req.body.name + "'", 0
    ], function(result) {
      res.json({ result });
    });
  });

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;