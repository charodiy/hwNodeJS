const express = require('express');
const expressHandlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');
const path = require('path');
const app = express();
const apiRouter = require('./routes/api.router');
const instance = require('./database').getInstance();
instance.setModels();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.engine('.hbs', expressHandlebars({
        defaultLayout: false,
        handlebars: allowInsecurePrototypeAccess(Handlebars)
    })
);
app.set('view engine', '.hbs');

app.use('/api', apiRouter);

app.listen(5000, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('Server listening on 5000');
});