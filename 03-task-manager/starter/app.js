

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();


//middleware
app.use(express.json());


//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});



app.use('/api/v1/tasks', tasks);  

const port = 3000;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


const start = async () => {
    try {
        await connectDB('mongodb://Kiki:Kb324239@ac-vdfhxqj-shard-00-00.lnllk8p.mongodb.net:27017,ac-vdfhxqj-shard-00-01.lnllk8p.mongodb.net:27017,ac-vdfhxqj-shard-00-02.lnllk8p.mongodb.net:27017/?authSource=admin&replicaSet=atlas-i0koh8-shard-0&tls=true&appName=NodeExpressProjects');
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
}




// app.get('/api/v1/tasks')  -> get all the tasks
// app.post('/api/v1/tasks') -> create a new task
// app.get('/api/v1/tasks/:id') -> get a single task
// app.patch('/api/v1/tasks/:id') -> update a task
// app.delete('/api/v1/tasks/:id') -> delete a task 