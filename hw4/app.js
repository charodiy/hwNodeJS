const express = require('express');
const app = express();
const apiRouter = require('./routes/api.router');

const instance = require('./dataBase').getInstance();
instance.setModels();

app.use(express.json());

app.use('/api', apiRouter);

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server listening on 5000');
});