const mongoose = require('mongoose');

const connnectionString =
  'mongodb://Kiki:Kb324239@ac-vdfhxqj-shard-00-00.lnllk8p.mongodb.net:27017,ac-vdfhxqj-shard-00-01.lnllk8p.mongodb.net:27017,ac-vdfhxqj-shard-00-02.lnllk8p.mongodb.net:27017/?authSource=admin&replicaSet=atlas-i0koh8-shard-0&tls=true&appName=NodeExpressProjects';

const connectDB = (url) => {
  return mongoose.connect(url);
}


module.exports = connectDB;
