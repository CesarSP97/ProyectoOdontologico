'use strict';
module.exports = (sequelize, DataTypes) => {
    const rol = sequelize.define('rol', {
        
        nombre: DataTypes.STRING(40)
        
    }, {freezeTableName: true});
    rol.associate = function (models) {
        // associations can be defined here
        rol.hasMany(models.usuario, {foreignkey: 'id_rol', as: 'usuario'});
    };
    return rol;
};