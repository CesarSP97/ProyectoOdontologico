'use strict';
module.exports = (sequelize, DataTypes) => {

    const usuario = sequelize.define('usuario', {

        nombre: {
            type: DataTypes.STRING(50)},
        apellido: {
            type: DataTypes.STRING(50)},
        cedula: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true},
        correo: {
            type: DataTypes.STRING(30),
            unique: true
        },
        clave: {
            type: DataTypes.STRING
        },
        externa_id: {
            type: DataTypes.UUID
        }

    }, {freezeTableName: true});

    usuario.associate = function (models) {

        usuario.belongsTo(models.rol, {foreignkey: 'id_rol'});
        usuario.hasMany(models.persona, {foreignkey: 'id_usuario', as: 'persona'});

    };

    return usuario;
};


