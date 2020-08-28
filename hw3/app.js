const express = require('express');

const app = express();

app.use(express.json());

const carRouter = require('./routes/car.router');

app.use('/cars', carRouter);

app.post('/buycar',
    (req, res, next) => {console.log('MDLW 1'); next()},
    (req, res, next) => {console.log('MDLW 2'); next()},
    (req, res) => {res.end('Finish')}
);

app.listen(5000, (err) => {
    if (err) {
        console.log(err)

    }
    console.log('Server listening on 5000');
});