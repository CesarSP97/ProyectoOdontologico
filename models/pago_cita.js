'use strict';
module.exports = (sequelize, DataTypes) => {

    const pago_cita = sequelize.define('pagos', {
        saldo: {type: DataTypes.DECIMAL},
        external_id: {type: DataTypes.UUID}
    }, {freezeTableName: true});

    pago_cita.associate = function (models) {
        pago_cita.belongsTo(models.cita, {foreignkey: 'id_cita'});
    };
    return pago_cita;
};