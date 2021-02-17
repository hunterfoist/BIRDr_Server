module.exports = (sequelize, DataTypes) => {
    const Gallery = sequelize.define('gallery', {
        image_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Gallery;
};