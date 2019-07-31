'use strict';
module.exports = (sequelize, DataTypes) => {

    const cita = sequelize.define('cita', {

        calendario_citas: DataTypes.DATEONLY,
        fecha: DataTypes.DATEONLY,
        hora: DataTypes.DATE,
        externa_id: DataTypes.UUID

    }, {freezeTableName: true});

    cita.associate = function (models) {

        cita.belongsTo(models.persona, {foreignkey: 'id_persona'});
        cita.hasMany(models.secuencia_tratamiento, {foreignkey: 'id_cita', as: 'secuencia_tratamiento'});
        cita.hasOne(models.pago_cita, {foreignkey: 'id_cita', as: 'pago_cita'});

    };

    return cita;
};