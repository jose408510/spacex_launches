const mongoose = require('mongoose');
const Schema = mongoose.Schema

const rocketSchema = new Schema ({
   rocket_id: {
       type: String
   },
   rocket_name: {
       type: String
   },
   rocket_type: {
       type: String
   }
});

module.exports = mongoose.model('rockets', rocketSchema)
