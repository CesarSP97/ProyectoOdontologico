'use strict';
module.exports = (sequelize, DataTypes) => {

    const signos_vitales = sequelize.define('signos_vitales', {

        presion_arterial: {
            type: DataTypes.STRING(45)
        },
        frecuencia_cardiaca: {
            type: DataTypes.STRING(45)
        },
        temperatura: {
            type: DataTypes.INTEGER(10)
        },
        respi_por_min: {
            type: DataTypes.STRING(45)
        },
        externa_id: {
            type: DataTypes.UUID
        }

    }, { freezeTableName: true });

    signos_vitales.associate = function(models) {

        signos_vitales.belongsTo(models.historia_clinica, { foreignkey: 'id_historia_clinica' });


    };

    return signos_vitales;
};