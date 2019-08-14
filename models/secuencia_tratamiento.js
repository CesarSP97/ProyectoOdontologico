'use strict';
module.exports = (sequelize, DataTypes) => {


    const secuencia_tratamiento = sequelize.define('secuencia_tratamiento', {

        fecha: {
            type: DataTypes.DATE
        },
        diagnostico: {
            type: DataTypes.STRING
        },
        tratamiento_realizado: {
            type: DataTypes.STRING
        },
        abono: {
            type: DataTypes.DECIMAL
        },
        external_id: {
            type: DataTypes.UUID
        }

    }, { freezeTableName: true });

    secuencia_tratamiento.associate = function(models) {

        secuencia_tratamiento.belongsTo(models.cita, { foreignkey: 'id_cita' });

    };

    return secuencia_tratamiento;
};