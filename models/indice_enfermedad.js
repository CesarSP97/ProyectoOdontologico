'use strict';
module.exports = (sequelize, DataTypes) => {

    const indice_enfermedad = sequelize.define('Indice_enfermedad', {

        enfermedad_periodontal: {
            type: DataTypes.STRING
        },
        mal_oclusion: {
            type: DataTypes.STRING
        },
        fluorosis: {
            type: DataTypes.STRING
        },

        external_id: {
            type: DataTypes.UUID
        }

    }, { freezeTableName: true });

    indice_enfermedad.associate = function(models) {

        indice_enfermedad.belongsTo(models.historia_clinica, { foreignkey: 'id_historia_clinica' });

    };

    return indice_enfermedad;
};