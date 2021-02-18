module.exports = (sequelize, DataTypes) => {

    const Log = sequelize.define('log', {
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rarity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image_id: {
            type: DataTypes.INTEGER
        },
        owner_id: {
            type: DataTypes.INTEGER
        },
        secret: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    })
    return Log;
};

