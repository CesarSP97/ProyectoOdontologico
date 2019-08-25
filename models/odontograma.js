'use strict';
module.exports = (sequelize, DataTypes) => {

    const odontograma = sequelize.define('odontograma', {

        external_id: {
            type: DataTypes.UUID
        }

    }, {freezeTableName: true});

    odontograma.associate = function (models) {

        odontograma.belongsTo(models.historia_clinica, {foreignkey: 'id_historia_clinica'});

    };


    return odontograma;
};