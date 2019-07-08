module.exports = function (sequelize, Sequelize) {
    var cita = require('./cita');
    var Cita = new cita(sequelize, Sequelize);
    var Pago_cita = sequelize.define('pagos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },
        saldo:{
            type: Sequelize.DECIMAL(45)
        }

    }, {freezeTableName: true, timestamps: false});
    Pago_cita.belongsTo(Cita, {
        foreignKey: 'idCita',
        constraints: false});
    return Pago_cita;
};


