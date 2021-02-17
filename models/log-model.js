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
            type: DataTypes.STRING,
            allowNull: false
        },
        image_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        owner_id: {
            type: DataTypes.INTEGER
        },
        secret: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Log;
};

