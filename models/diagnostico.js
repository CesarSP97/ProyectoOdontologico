'use strict';
module.exports = (sequelize, DataTypes) => {

    const diagnostico = sequelize.define('diagnostico', {
        diagnostico_medico: {type: DataTypes.STRING(500)},
        externa_id: {type: DataTypes.UUID}
    }, {freezeTableName: true});

    diagnostico.associate = function (models) {
        diagnostico.belongsTo(models.historia_clinica, {foreignkey: 'id_historia_clinica'});
    };
    return diagnostico;
};