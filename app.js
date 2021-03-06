require("dotenv").config;
let express = require('express');
let app = express();
let sequelize = require('./db');

let log = require('./controllers/log-controller');
let user = require('./controllers/user-controller');


sequelize.sync();
// sequelize.sync({force: true});

app.use(require('./middleware/headers'));

app.use(express.json());

app.use('/user', user);
app.use("/log", log);


app.listen(process.env.PORT, function(){

    console.log(`App is listening on port ${process.env.PORT}`);
});