module.exports = function (sequelize, Sequelize) {
    var plan_tratamiento = require('./plan_tratamiento');
    var Plan_tratamiento = new plan_tratamiento(sequelize, Sequelize);
    
    var Pago_tratamiento = sequelize.define('pagos', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER(6)
        },
        abono:{
            type:Sequelize.DECIMAL(15)
        },
        saldo_total:{
            type: Sequelize.DECIMAL(15)
        }

    }, {freezeTableName: true, timestamps: false});
    
    Pago_tratamiento.belongsTo(Plan_tratamiento, {
        foreignKey: 'idPlan_tratamiento'
    });
    
    return Pago_tratamiento;
};
