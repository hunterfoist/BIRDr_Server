module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
            password:{
                type:  DataTypes.STRING,
                allowNull: false,
            },
            
     })
     return Log;
}