
const mongoose = require('mongoose');


const connnectionString = 'mongodb+srv://Kiki:Kb324239@nodeexpressprojects.lnllk8p.mongodb.net/?appName=NodeExpressProjects';


mongoose
    .connect(connnectionString)
    .then(() => console.log('Connected to DB...'))
    .catch((err) => console.log(err))
;