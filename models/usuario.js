module.exports = function (sequelize, Sequelize) {
    var rol = require('./rol');
    var Rol = new rol(sequelize, Sequelize);
    
    var Usuario = sequelize.define('usuario', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)},
        nombre: {
            type: Sequelize.STRING(50)},
        apellido: {
            type: Sequelize.STRING(50)},
        cedula: {
            type: Sequelize.STRING(10),
            allowNull: false,
            unique: true},
        correo: {
            type: Sequelize.STRING(30),
            unique: true
        }
        
    }, {freezeTableName: true,
        createdAt: "fecha_registro",
        updateAt: 'fecha_modificacion'});
    Usuario.belongsTo(Rol, {
        foreignKey: 'idRol',
        constraints: false});
    return Usuario;
};


