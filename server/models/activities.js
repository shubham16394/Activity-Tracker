var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var activitiesSchema = new Schema({
  page_name: String,
  timestamp: String,
  event_type: String,
  image_id: String
});

mongoose.model('activities', activitiesSchema);
