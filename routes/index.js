(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('mongodb://admin:admin123@ds059938.mongolab.com:59938/funforkid_db', ['carplaylist','movieplaylist','favoritevideo']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/api/carplaylist', function(req, res) {
    db.carplaylist.find(function(err, data) {
      res.json(data);
    });
  });

  router.get('/api/movieplaylist', function(req, res) {
    db.movieplaylist.find(function(err, data) {
      res.json(data);
    });
  });

  module.exports = router;

}());
