'use strict';
module.exports = (sequelize, DataTypes) => {

    const indice_placa = sequelize.define('indice_placa', {

        pieza_dental: {
            type: DataTypes.INTEGER
        },
        placa: {
            type: DataTypes.INTEGER
        },
        calculo: {
            type: DataTypes.INTEGER
        },
        gingivitis: {
            type: DataTypes.INTEGER
        },

        external_id: {
            type: DataTypes.UUID
        }

    }, { freezeTableName: true });

    indice_placa.associate = function(models) {

        indice_placa.belongsTo(models.historia_clinica, { foreignkey: 'id_historia_clinica' });


    };

    return indice_placa;
};