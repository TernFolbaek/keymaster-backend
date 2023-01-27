const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  highScore: { type: Number, default: 0 },
});

// Export model
module.exports = mongoose.model('User', userSchema);
