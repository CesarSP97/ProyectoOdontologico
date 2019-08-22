'use strict';
module.exports = (sequelize, DataTypes) => {
    const rol = sequelize.define('rol', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER(6)
        },
        nombre: DataTypes.STRING(45)
        
    }, {freezeTableName: true});
    rol.associate = function (models) {
        // associations can be defined here
        rol.hasMany(models.usuario, {foreignkey: 'id_rol', as: 'usuario'});
    };
    return rol;
};