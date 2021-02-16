const Sequelize = require('sequelize');
const sequelize = new Sequelize('BIRDr', 'postgres', 'password', {
    host: "localhost",
    dialect: "postgres", 

}
);

sequelize.authenticate().then(
    function() {
        console.log('Connected to BIRDr postgres database');
    },
    function(err){
        console.log(err);
    }
);
   module.exports = sequelize;