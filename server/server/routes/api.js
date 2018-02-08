var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


/* GET api listing. */
router.get('/a', (req, res) => {
    mongoose.model('activities').find({"page_name":"a"},function(err, activities) {
    res.send(activities);
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  });

});

router.get('/b', (req, res) => {
    mongoose.model('activities').find({"page_name":"b"},function(err, activities) {
    res.send(activities);
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  });

});


/* POST api listing. */
router.post('/activities', function(req, res) {
    var activity = mongoose.model('activities');
    var act = new activity({
        page_name: req.body.page_name,
        timestamp: req.body.timestamp,
        event_type: req.body.event_type,
        image_id: req.body.image_id
    });

    act.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('activity saved successfully...');
           res.send(req.body);
    });

});

module.exports = router;