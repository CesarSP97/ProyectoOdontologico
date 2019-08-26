'use strict';
module.exports = (sequelize, DataTypes) => {

    const cita = sequelize.define('cita', {
        detalle_costo: DataTypes.STRING,
        costo: DataTypes.STRING,
        fecha: DataTypes.DATEONLY,
        hora: DataTypes.STRING,
        estado: DataTypes.BOOLEAN,
        externa_id: DataTypes.UUID
    }, {freezeTableName: true});

    cita.associate = function (models) {
        cita.belongsTo(models.persona, {foreignkey: 'id_persona'});
        cita.hasMany(models.secuencia_tratamiento, {foreignkey: 'id_cita', as: 'secuencia_tratamiento'});
    };
    return cita;
};