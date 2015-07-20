(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  var db = mongojs('mongodb://admin:admin123@ds059938.mongolab.com:59938/funforkid_db', ['kidchannelsplaylist','carplaylist','movieplaylist','favorites']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
  });

  router.get('/api/kidchannelsplaylist', function(req, res) {
    db.kidchannelsplaylist.find(function(err, data) {
      res.json(data);
    });
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




//favorite update
  router.get('/api/favorites', function(req, res) {
    db.favorites.find(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/favorites', function(req, res) {
    db.favorites.insert(req.body, function(err, data) {
      res.json(data);
    });

  });
  router.delete('/api/favorites/:_id', function(req, res) {
    db.favorites.remove({
      _id: mongojs.ObjectId(req.params._id)
    }, '', function(err, data) {
      res.json(data);
    });

  });

  module.exports = router;

}());
