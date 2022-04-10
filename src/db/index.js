const mongoose = require('mongoose');
const { MONGO_URI } = require('$root/config');
mongoose.set("debug", true)
const connectDB = () => {
  return mongoose.connect(MONGO_URI);
}
module.exports = {
  connectDB,
} 