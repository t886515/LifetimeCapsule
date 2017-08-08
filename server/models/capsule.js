const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./user.js');

const capsuleSchema = new Schema({
  _user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  contents: [],
  inProgress: Boolean,
  unearthed: Boolean,
  unearthDate: Date
});

const Capsule = mongoose.model('capsule', capsuleSchema);

module.exports = Capsule;
