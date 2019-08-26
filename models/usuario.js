'use strict';
module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define('usuario', {
        nombre: {type: DataTypes.STRING(50)},
        apellido: {type: DataTypes.STRING(50)},
        cedula: {
            type: DataTypes.STRING(10),
            allowNull: false,
            unique: true
        },
        correo: {
            type: DataTypes.STRING(30),
            unique: true
        },
        clave: {type: DataTypes.STRING},
        externa_id: {type: DataTypes.UUID}
    }, {freezeTableName: true});

    Usuario.associate = function (models) {
        Usuario.belongsTo(models.rol, {foreignkey: 'id_rol'});
        Usuario.hasMany(models.persona, {foreignkey: 'id_usuario', as: 'persona'});
    };
    return Usuario;
};