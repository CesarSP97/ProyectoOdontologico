'use strict';
module.exports = (sequelize, DataTypes) => {


    const secuencia_tratamiento = sequelize.define('secuencia_tratamiento', {

        fecha: {
            type: DataTypes.DATEONLY
        },
        diagnostico: {
            type: DataTypes.STRING
        },
        tratamiento_realizado: {
            type: DataTypes.STRING
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