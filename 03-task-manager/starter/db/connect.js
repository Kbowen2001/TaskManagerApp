const mongoose = require('mongoose');



const connectDB = (url) => {
  return mongoose.connect(url, {
    dbName: process.env.MONGO_DB_NAME || 'task-manager',
  });
}


module.exports = connectDB;
