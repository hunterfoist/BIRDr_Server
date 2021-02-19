module.exports = (sequelize, DataTypes) => {
    const Gallery = sequelize.define('gallery', {
        
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Gallery;
};