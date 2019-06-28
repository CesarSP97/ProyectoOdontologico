
module.exports = function (sequelize, Sequelize) {
    var Rol = sequelize.define('rol', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },

        rol: {
            type: Sequelize.STRING(45)
        }

    }, {freezeTableName: true, timestamps: false});
    Rol.associate = function (models) {
        models.rol.hasMany(models.usuario, {
            foreignKey: 'idRol'
        });
    };
    return Rol;
};