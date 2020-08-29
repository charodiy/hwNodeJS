const express = require('express');

const app = express();

app.use(express.json());

const carRouter = require('./routes/car.router');

app.use('/cars', carRouter);

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server listening on 5000');
});